import { Inject, Service } from 'typedi';
import { IEventInput, IEvent } from '../interfaces/IEvent';
import { Types } from 'mongoose';


@Service()
export default class EventService {

    constructor(
        @Inject('eventModel') private eventModel: Models.EventModel,
        @Inject('logger') private logger: any,
    ) { }

    public async addEvent(eventInput: IEventInput): Promise<{ event: IEvent }> {

        try {
            this.logger.silly('Creating event db record');

            const eventData = new this.eventModel(eventInput)

            const eventRecord = await eventData.save()

            const event = eventRecord.toObject();
            Reflect.deleteProperty(event, '__v');

            return { event };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getEventWithPagination(search: any, limit: number, skip: number): Promise<{ events: any }> {

        try {
            this.logger.silly('Get Events with Pagination');

            const events = await this.eventModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).populate('_user', 'name picture')
                .skip(skip).limit(limit)

            return { events };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async countEvents(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.eventModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getEvents(search: any): Promise<{ events: any }> {

        try {
            this.logger.silly('Get Events');

            const events = await this.eventModel.find(search, { __v: 0 }).populate('_user', 'name picture contact role address').sort({ createdAt: -1 }).populate('_user', 'name picture')

            return { events };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getSingleEvents(search: any): Promise<{ events: any }> {

        try {
            this.logger.silly('Get Events');

            const events = await this.eventModel.findOne(search, { __v: 0 }).populate('_user', 'name picture')

            return { events };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateEvent(eventInput: IEventInput): Promise<{ event: any }> {

        try {
            this.logger.silly('update Single Event');

            const event = await this.eventModel.findOneAndUpdate({ _id: eventInput.eventId, isDeleted: false }, { $set: eventInput }, { new: true })

            return { event };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteEvent(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting event');

            const deleteData = await this.eventModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }
}
