/* eslint-disable @typescript-eslint/no-unused-vars */
import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type SessionModel = Model<Document>;
    export type RequestPasswordModel = Model<Document>;
    export type BlogModel = Model<Document>;
    export type ProjectModel = Model<Document>;
    export type QueryModel = Model<Document>;
    export type SubscriberModel = Model<Document>;
    export type SettingsModel = Model<Document>;
    export type EventModel = Model<Document>;
    export type IndividualFormModel = Model<Document>;
    export type SchoolFormModel = Model<Document>;
    export type CorporateFormModel = Model<Document>;
    export type CorporateFormModel = Model<Document>;
    export type CorporateFormModel = Model<Document>;

  }
}
