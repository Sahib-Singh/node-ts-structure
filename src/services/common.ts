import jwt from 'jsonwebtoken';
import config from '../config';
import { NextFunction } from 'express';


const verifyToken = (req: any, res: any, next: NextFunction) => {
    try {

        console.log(req.headers, "this is req . .  .")

        if (!req.headers.authorization && !req.query.access_token && !req.body.access_token) {
            throw new Error('Unauthorized apis');
        }

        const { authorization } = req.headers as any;
        const token: string = authorization
            ? authorization.split(' ')[1]
            : (req.query.access_token || req.body.access_token);

        if (!token) {
            throw new Error('Unauthorized api');
        }

        jwt.verify(token, config.jwtSecret, function (err: any, decoded: any) {
            if (err) {
                throw new Error(err.message);
            }

            req.user = { ...decoded }

        });
        next();

    } catch (error) {

        console.log(error)

        return res.status(400).json({
            status: false,
            data: null,
            message: error.message,
        })
    }
}

export {
    verifyToken
};