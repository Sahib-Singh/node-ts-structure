import { Types } from "mongoose";

export interface ISubscriber {
    _id: Types.ObjectId;
    email: string;
    isBlocked: String;
    isDeleted: Boolean;
}

export interface ISubscriberInput {
    subscriberId: Types.ObjectId
    email: string;
    isBlocked: String;
    isDeleted: Boolean;
}
