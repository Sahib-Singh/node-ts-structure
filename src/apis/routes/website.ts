import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import ProjectService from '../../services/projects';
import SubscriberService from '../../services/subscriber';
import QueryService from '../../services/query';
import BlogService from '../../services/blog';
import middlewares from '../middlewares/validators'
import SettingsService from '../../services/settings';

const route = Router();

export default (app: Router) => {
    app.use('/website', route);

    route.get('/projects', middlewares.getProjectValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const { pagination, search } = req.query as any;
            const websiteServiceInstance = Container.get(ProjectService);

            const limit = parseInt('5')
            const page = parseInt(req.query.page as string);

            logger.warn(pagination)

            let regex = new RegExp(`${search ? search : ''}`, 'gi');

            const look = { 'name': regex, isDeleted: false, isBlocked: false };

            if (JSON.parse(pagination)) {

                const { projects } = await websiteServiceInstance.getProjectWithPagination(look, limit, (page - 1) * limit);
                const { count } = await websiteServiceInstance.countProjects(look);

                logger.silly(count, "this is count . . . .")
                logger.silly(limit, "this is limit . . . .")

                return res.status(200).json({
                    status: true,
                    message: 'Fetched Successfully !',
                    data: { projects },
                    totalDocuments: count,
                    currentPage: page,
                    totalPages: Math.ceil(count / limit)
                })

            } else {

                const { projects } = await websiteServiceInstance.getProjects(look);
                return res.status(200).json({
                    status: true,
                    message: 'Fetched Successfully !',
                    data: { projects },
                })
            }

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.get('/blogs/:blogId', async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const blogId = req.params.blogId;

            if (!blogId) {
                return res.status(400).json({
                    status: false,
                    message: 'Invalid Blog ID',
                    data: null
                })
            }
            const blogServiceInstance = Container.get(BlogService);
            const { blogs } = await blogServiceInstance.getSingleBlogs({ _id: blogId });

            return res.status(200).json({
                status: true,
                message: 'Fetched Successfully !',
                data: blogs,
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });


    route.post('/subscriber', middlewares.addSubscriberValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const subscriberServiceInstance = Container.get(SubscriberService);

            const { subscriber } = await subscriberServiceInstance.addSubscriber({ ...req.body });

            return res.status(201).json({
                status: true,
                message: 'Created Successfully !',
                data: subscriber,
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.post('/query', middlewares.addQueryValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const queryServiceInstance = Container.get(QueryService);

            const { query } = await queryServiceInstance.addQuery({ ...req.body });

            return res.status(201).json({
                status: true,
                message: 'Created Successfully !',
                data: query,
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });


    route.get('/settings', async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const settingsServiceInstance = Container.get(SettingsService);

            const { settings } = await settingsServiceInstance.getSettings({});

            return res.status(200).json({
                status: true,
                message: 'Fetched Successfully !',
                data: { settings }
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.get('/countryCode', async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const settingsServiceInstance = Container.get(SettingsService);

            const { code } = await settingsServiceInstance.getCountryCode();

            return res.status(200).json({
                status: true,
                message: 'Fetched Successfully !',
                data: { code }
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

}