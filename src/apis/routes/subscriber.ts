import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import SubscriberService from '../../services/subscriber';
import middlewares from '../middlewares/validators'
const route = Router();


export default (app: Router) => {
    app.use('/subscribers', route);

    route.get('/', middlewares.getSubscriberValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const { pagination, search } = req.query as any;
            const subscriberServiceInstance = Container.get(SubscriberService);

            const limit = parseInt(req.query.limit as string ? req.query.limit as string : '10')
            const page = parseInt(req.query.page as string);

            logger.warn(pagination)

            let regex = new RegExp(`${search ? search : ''}`, 'gi');

            const look = { email: regex, isDeleted: false };

            if (JSON.parse(pagination)) {

                const { subscribers } = await subscriberServiceInstance.getSubscriberWithPagination(look, limit, (page - 1) * limit);
                const { count } = await subscriberServiceInstance.countSubscribers(look);

                logger.silly(count, "this is count . . . .")
                logger.silly(limit, "this is limit . . . .")

                return res.status(200).json({
                    status: !!subscribers.length,
                    message: 'Fetched Successfully !',
                    data: { subscribers },
                    totalDocuments: count,
                    currentPage: page,
                    totalPages: Math.ceil(count / limit)
                })

            } else {

                const { subscribers } = await subscriberServiceInstance.getSubscribers({});

                return res.status(200).json({
                    status: true,
                    message: 'Fetched Successfully !',
                    data: subscribers,
                })
            }

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.post('/', middlewares.addSubscriberValidate, async (req: Request, res: Response) => {
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

    route.put('/', middlewares.putSubscriberValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const subscriberServiceInstance = Container.get(SubscriberService);

            const { subscriber } = await subscriberServiceInstance.updateSubscriber(req.body);

            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: subscriber,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }

    });

    route.patch('/', middlewares.patchSubscriberValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const subscriberServiceInstance = Container.get(SubscriberService);

            const { subscriber } = await subscriberServiceInstance.updateSubscriber(req.body);
            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: subscriber,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.delete('/', middlewares.deleteSubscriberValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const subscriberServiceInstance = Container.get(SubscriberService);

            const { deleteData } = await subscriberServiceInstance.deleteSubscriber(req.body.ids);
            return res.status(200).json({
                status: true,
                message: 'Deleted Successfully !',
                data: deleteData,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });
};
