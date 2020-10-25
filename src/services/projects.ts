import { Inject, Service } from 'typedi';
import { IProjectInput, IProject } from '../interfaces/IProject';
import { Types } from 'mongoose';


@Service()
export default class AuthService {

    constructor(
        @Inject('projectModel') private projectModel: Models.ProjectModel,
        @Inject('logger') private logger: any,
    ) { }

    public async addProject(projectInput: IProjectInput): Promise<{ project: IProject }> {

        try {
            this.logger.silly('Creating project db record');

            const projectData = new this.projectModel(projectInput)

            const projectRecord = await projectData.save()

            const project = projectRecord.toObject();
            Reflect.deleteProperty(project, '__v');

            return { project };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getProjectWithPagination(search: any, limit: number, skip: number): Promise<{ projects: any }> {

        try {
            this.logger.silly('Get Projects with Pagination');

            const projects = await this.projectModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)

            return { projects };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async countProjects(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.projectModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getProjects(search: any): Promise<{ projects: any }> {

        try {
            this.logger.silly('Get Projects');

            const projects = await this.projectModel.find(search, { __v: 0 }).sort({ createdAt: -1 })

            return { projects };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateProject(projectInput: IProjectInput): Promise<{ project: any }> {

        try {
            this.logger.silly('update Single Project');

            const project = await this.projectModel.findOneAndUpdate({ _id: projectInput.projectId, isDeleted: false }, { $set: projectInput }, { new: true })

            return { project };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteProject(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting project');

            const deleteData = await this.projectModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }
}
