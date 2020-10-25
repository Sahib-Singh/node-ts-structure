import { Router, Request, Response } from 'express';

import { verifyToken } from '../../services/common';

const route = Router();

export default (app: Router) => {
    app.use('/gateway', route);

    route.get("/", verifyToken, (req: any, res: Response) => {

        try {

            if (req.user.isDeleted) {
                return res
                    .status(401)
                    .json({
                        status: false,
                        data: null,
                        message: "Deleted by admin, please contact support",
                    })
            }
            else if (req.user.isBlocked) {
                return res.status(401).json({
                    status: false,
                    data: null,
                    message: "Blocked by admin, contact support",
                })
            }
            else {
                res.set("user", JSON.stringify({
                    ...req.user
                }))
                return res.status(200).send({
                    status: true,
                    data: req.user,
                    message: "success",
                })
            }

        } catch (error) {
            return res.status(400).send({
                status: false,
                data: null,
                message: error.message,
            })
        }
    })
}