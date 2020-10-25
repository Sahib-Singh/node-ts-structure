import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import UserService from '../../services/user';
import middlewares from '../middlewares/validators'

const route = Router();

export default (app: Router) => {
    app.use('/members', route);

    route.get('/', middlewares.getUserValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const { pagination, search } = req.query as any;
            const userServiceInstance = Container.get(UserService);

            const limit = parseInt(req.query.limit as string ? req.query.limit as string : '10')
            const page = parseInt(req.query.page as string);

            logger.warn(pagination)

            let regex = new RegExp(`${search ? search : ''}`, 'gi');

            const look = { role: 'MEMBER', 'contact.email': regex, isDeleted: false };

            if (JSON.parse(pagination)) {

                const { users } = await userServiceInstance.getUserWithPagination(look, limit, (page - 1) * limit);
                const { count } = await userServiceInstance.countUsers(look);

                logger.silly(count, "this is count . . . .")
                logger.silly(limit, "this is limit . . . .")

                return res.status(200).json({
                    status: !!users.length,
                    message: 'Fetched Successfully !',
                    data: { users },
                    totalDocuments: count,
                    currentPage: page,
                    totalPages: Math.ceil(count / limit)
                })

            } else {

                let regex = new RegExp(`^${search}$`, 'i');
                const look = { role: 'MEMBER', 'contact.email': regex, isDeleted: false };

                const { users } = await userServiceInstance.getUsers(look);
                return res.status(200).json({
                    status: !!users.length,
                    message: 'Fetched Successfully !',
                    data: { users },
                })
            }

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.post('/', middlewares.addUserValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const userServiceInstance = Container.get(UserService);

            const { user } = await userServiceInstance.addUser({ ...req.body, role: 'MEMBER' });

            return res.status(201).json({
                status: true,
                message: 'Created Successfully !',
                data: user,
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.put('/', middlewares.putUserValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const userServiceInstance = Container.get(UserService);

            const { user } = await userServiceInstance.updateUser(req.body);

            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: user,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }

    });

    route.patch('/', middlewares.patchUserValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const userServiceInstance = Container.get(UserService);

            const { user } = await userServiceInstance.updateUser(req.body);
            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: user,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.delete('/', middlewares.deleteUserValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const userServiceInstance = Container.get(UserService);

            const { deleteData } = await userServiceInstance.deleteUser(req.body.ids);
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
