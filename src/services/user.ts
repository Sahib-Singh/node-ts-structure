import { Inject, Service } from 'typedi';
import { IUserInputDTO, IUser } from '../interfaces/IUser';
import { Types } from 'mongoose';
@Service()
export default class UserService {

    constructor(
        @Inject('userModel') private userModel: Models.UserModel,
        @Inject('logger') private logger: any,
    ) { }


    public async addUser(userInputDTO: IUserInputDTO): Promise<{ user: IUser }> {

        try {
            this.logger.silly('Creating user db record');

            const userData = new this.userModel(userInputDTO)

            const userRecord = await userData.save()

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            Reflect.deleteProperty(user, '__v');

            return { user };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getUserWithPagination(search: any, limit: number, skip: number): Promise<{ users: any }> {

        try {
            this.logger.silly('Get Users with Pagination');

            const users = await this.userModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            this.logger.silly(users)

            return { users };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getUsers(search: any): Promise<{ users: any }> {

        try {
            this.logger.silly('Get Users');

            const users = await this.userModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 })

            return { users };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async countUsers(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count Users');

            const count = await this.userModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateUser(userInputDTO: IUserInputDTO): Promise<{ user: any }> {

        try {
            this.logger.silly('update Single user');

            const user = await this.userModel.findOneAndUpdate({ _id: userInputDTO.userId, isDeleted: false }, { $set: userInputDTO }, { new: true, projection: { __v: 0, password: 0 } })

            return { user };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteUser(ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting User', ids);

            const deleteData = await this.userModel.updateMany({ _id: ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true }, { projection: { __v: 0, password: 0 } })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

}