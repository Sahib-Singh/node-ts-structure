import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import QueryService from '../../services/query';
import middlewares from '../middlewares/validators'

const route = Router();


export default (app: Router) => {
    app.use('/query', route);

    route.get('/', middlewares.getQueryValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const { pagination, search } = req.query as any;
            const queryServiceInstance = Container.get(QueryService);

            const limit = parseInt(req.query.limit as string ? req.query.limit as string : '10')
            const page = parseInt(req.query.page as string);

            logger.warn(pagination)

            let regex = new RegExp(`${search ? search : ''}`, 'gi');

            const look = { 'contact.email': regex, isDeleted: false };

            if (JSON.parse(pagination)) {

                const { querys } = await queryServiceInstance.getQueryWithPagination(look, limit, (page - 1) * limit);
                const { count } = await queryServiceInstance.countQuerys(look);

                logger.silly(count, "this is count . . . .")
                logger.silly(limit, "this is limit . . . .")

                return res.status(200).json({
                    status: !!querys.length,
                    message: 'Fetched Successfully !',
                    data: { querys },
                    totalDocuments: count,
                    currentPage: page,
                    totalPages: Math.ceil(count / limit)
                })

            } else {

                const { querys } = await queryServiceInstance.getQuerys(look);
                return res.status(200).json({
                    status: !!querys.length,
                    message: 'Fetched Successfully !',
                    data: { querys },
                })
            }

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.post('/', middlewares.addQueryValidate, async (req: Request, res: Response) => {
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

    route.put('/', middlewares.putQueryValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const queryServiceInstance = Container.get(QueryService);

            const { query } = await queryServiceInstance.updateQuery(req.body);

            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: query,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }

    });

    route.patch('/', middlewares.patchQueryValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const queryServiceInstance = Container.get(QueryService);

            const { query } = await queryServiceInstance.updateQuery(req.body);
            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: query,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.delete('/', middlewares.deleteQueryValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const queryServiceInstance = Container.get(QueryService);

            const { deleteData } = await queryServiceInstance.deleteQuery(req.body.ids);
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
