import { Types } from "mongoose";

export interface IProject {
    _id: Types.ObjectId;
    name: String;
    images: [string];
    desc: string;
    startDate: Date
    state: String;
    isDeleted: Boolean;
}

export interface IProjectInput {
    projectId: Types.ObjectId
    name: String;
    images: [string];
    desc: string;
    startDate: Date
    state: String;
    isDeleted: Boolean;
}
