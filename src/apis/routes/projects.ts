import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import ProjectService from '../../services/projects';
import middlewares from '../middlewares/validators'

const route = Router();


export default (app: Router) => {
    app.use('/project', route);

    route.get('/', middlewares.getXuser, middlewares.getProjectValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const { pagination, search } = req.query as any;
            const projectServiceInstance = Container.get(ProjectService);

            const limit = parseInt(req.query.limit as string ? req.query.limit as string : '10')
            const page = parseInt(req.query.page as string);

            logger.warn(pagination)

            let regex = new RegExp(`${search ? search : ''}`, 'gi');

            const look = { 'name': regex, isDeleted: false };

            if (JSON.parse(pagination)) {

                const { projects } = await projectServiceInstance.getProjectWithPagination(look, limit, (page - 1) * limit);
                const { count } = await projectServiceInstance.countProjects(look);

                logger.silly(count, "this is count . . . .")
                logger.silly(limit, "this is limit . . . .")

                return res.status(200).json({
                    status: !!projects.length,
                    message: 'Fetched Successfully !',
                    data: { projects },
                    totalDocuments: count,
                    currentPage: page,
                    totalPages: Math.ceil(count / limit)
                })

            } else {

                const { projects } = await projectServiceInstance.getProjects(look);
                return res.status(200).json({
                    status: !!projects.length,
                    message: 'Fetched Successfully !',
                    data: { projects },
                })
            }

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.post('/', middlewares.getXuser, middlewares.addProjectValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const projectServiceInstance = Container.get(ProjectService);

            const { project } = await projectServiceInstance.addProject({ ...req.body });

            return res.status(201).json({
                status: true,
                message: 'Created Successfully !',
                data: project,
            })

        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.put('/', middlewares.getXuser, middlewares.putProjectValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const projectServiceInstance = Container.get(ProjectService);

            const { project } = await projectServiceInstance.updateProject(req.body);

            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: project,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }

    });

    route.patch('/', middlewares.getXuser, middlewares.patchProjectValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const projectServiceInstance = Container.get(ProjectService);

            const { project } = await projectServiceInstance.updateProject(req.body);
            return res.status(200).json({
                status: true,
                message: 'Updated Successfully !',
                data: project,
            })
        } catch (e) {
            logger.error('🔥 error: %o', e);
            return res.status(400).json({ status: false, message: e.message });
        }
    });

    route.delete('/', middlewares.getXuser, middlewares.deleteProjectValidate, async (req: Request, res: Response) => {
        const logger = Container.get('logger') as any;
        try {

            const projectServiceInstance = Container.get(ProjectService);

            const { deleteData } = await projectServiceInstance.deleteProject(req.body.ids);
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
