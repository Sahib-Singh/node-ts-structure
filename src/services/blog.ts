import { Inject, Service } from 'typedi';
import { IBlogInput, IBlog } from '../interfaces/IBlog';
import { Types } from 'mongoose';


@Service()
export default class AuthService {

    constructor(
        @Inject('blogModel') private blogModel: Models.BlogModel,
        @Inject('logger') private logger: any,
    ) { }

    public async addBlog(blogInput: IBlogInput): Promise<{ blog: IBlog }> {

        try {
            this.logger.silly('Creating blog db record');

            const blogData = new this.blogModel(blogInput)

            const blogRecord = await blogData.save()

            const blog = blogRecord.toObject();
            Reflect.deleteProperty(blog, '__v');

            return { blog };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }


    public async getBlogWithPagination(search: any, limit: number, skip: number): Promise<{ blogs: any }> {

        try {
            this.logger.silly('Get Blogs with Pagination');

            const blogs = await this.blogModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).populate('_user', 'name picture')
                .skip(skip).limit(limit)

            return { blogs };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async countBlogs(search: any): Promise<{ count: any }> {

        try {
            this.logger.silly('Count query');

            const count = await this.blogModel.countDocuments(search)

            return { count };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getBlogs(search: any): Promise<{ blogs: any }> {

        try {
            this.logger.silly('Get Blogs');

            const blogs = await this.blogModel.find(search, { __v: 0 }).populate('_user', 'name picture contact role address').sort({ createdAt: -1 }).populate('_user', 'name picture')

            return { blogs };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async getSingleBlogs(search: any): Promise<{ blogs: any }> {

        try {
            this.logger.silly('Get Blogs');

            const blogs = await this.blogModel.findOne(search, { __v: 0 }).populate('_user', 'name picture')

            return { blogs };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async updateBlog(blogInput: IBlogInput): Promise<{ blog: any }> {

        try {
            this.logger.silly('update Single Blog');

            const blog = await this.blogModel.findOneAndUpdate({ _id: blogInput.blogId, isDeleted: false }, { $set: blogInput }, { new: true })

            return { blog };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }

    public async deleteBlog(Ids: any): Promise<{ deleteData: any }> {

        try {
            this.logger.silly('Deleting blog');

            const deleteData = await this.blogModel.updateMany({ _id: Ids.map((res: any) => Types.ObjectId(res)), isDeleted: false }, { isDeleted: true })

            return { deleteData };

        } catch (e) {

            this.logger.error(e);
            throw e;
        }
    }
}
