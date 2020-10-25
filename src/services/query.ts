import { Inject, Service } from 'typedi';
import { IQueryInput, IQuery } from '../interfaces/IQuery';
import { Types } from 'mongoose';


@Service()
export default class AuthService {

    constructor(
        @Inject('queryModel') private queryModel: Models.QueryModel,
        @Inject('logger') private logger: any,
    ) { }

    public async addQuery(queryInput: IQueryInput): Promise<{ query: IQuery }> {

        try {
            this.logger.silly('Creating query db record');

            const queryData = new this.queryModel(queryInput)

            const queryRecord = await queryData.save()

            const query = queryRecord.toObject();
            Reflect.deleteProperty(query, '__v');

            return { query };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getQueryWithPagination(search: any, limit: number, skip: number): Promise<{ querys: any }> {

        try {
            this.logger.silly('Get Querys with Pagination');

            const querys = await this.queryModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            return { querys };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async countQuerys(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.queryModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getQuerys(search: any): Promise<{ querys: any }> {

        try {
            this.logger.silly('Get Querys');

            const querys = await this.queryModel.find(search, { __v: 0 }).sort({ createdAt: -1 })

            return { querys };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateQuery(queryInput: IQueryInput): Promise<{ query: any }> {

        try {
            this.logger.silly('update Single Query');

            const query = await this.queryModel.findOneAndUpdate({ _id: queryInput.queryId, isDeleted: false }, { $set: queryInput }, { new: true })

            return { query };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteQuery(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting query');

            const deleteData = await this.queryModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }
}
