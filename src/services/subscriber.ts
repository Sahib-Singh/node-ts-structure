import { Inject, Service } from 'typedi';
import { ISubscriberInput, ISubscriber } from '../interfaces/ISubscriber';
import { Types } from 'mongoose';


@Service()
export default class SubscriberService {

    constructor(
        @Inject('subscriberModel') private subscriberModel: Models.SubscriberModel,
        @Inject('logger') private logger: any,
    ) { }

    public async addSubscriber(subscriberInput: ISubscriberInput): Promise<{ subscriber: ISubscriber }> {

        try {
            this.logger.silly('Creating subscriber db record');

            const subscriberData = new this.subscriberModel(subscriberInput)

            const subscriberRecord = await subscriberData.save()

            const subscriber = subscriberRecord.toObject();
            Reflect.deleteProperty(subscriber, '__v');

            return { subscriber };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getSubscriberWithPagination(search: any, limit: number, skip: number): Promise<{ subscribers: any }> {

        try {
            this.logger.silly('Get Subscribers with Pagination');

            const subscribers = await this.subscriberModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            return { subscribers };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async countSubscribers(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count Users');

            const count = await this.subscriberModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getSubscribers(search: any): Promise<{ subscribers: any }> {

        try {
            this.logger.silly('Get Subscribers');
            const subscribers = await this.subscriberModel.find(search, { __v: 0 }).sort({ createdAt: -1 })

            return { subscribers };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateSubscriber(subscriberInput: ISubscriberInput): Promise<{ subscriber: any }> {

        try {
            this.logger.silly('update Single Subscriber');

            const subscriber = await this.subscriberModel.findOneAndUpdate({ _id: subscriberInput.subscriberId, isDeleted: false }, { $set: subscriberInput }, { new: true })

            return { subscriber };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteSubscriber(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting subscriber');

            const deleteData = await this.subscriberModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }
}
