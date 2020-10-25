import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import AuthService from '../../services/auth';
import { IUserInputDTO } from '../../interfaces/IUser';
import middlewares from '../middlewares/validators'
import CryptoJS from 'crypto-js'

const router = Router();

export default (app: Router) => {
    app.use('/auth', router);

    router.route("/signup")
        .post(middlewares.signupValidate, async (req: Request, res: Response) => {
            const logger = Container.get('logger') as any;
            logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
            try {
                const authServiceInstance = Container.get(AuthService);
                const { user, token } = await authServiceInstance.SignUp(req.body as IUserInputDTO);
                return res.status(201).json({ status: true, message: 'Logined Successfully !', data: { user, token } });
            } catch (e) {
                logger.error('🔥 error: %o', e);

                return res.status(400).json({ status: false, message: e.message, data: {} });
            }
        });

    router.route("/login")
        .post(middlewares.loginValidate, async (req: Request, res: Response) => {
            const logger = Container.get('logger') as any;
            logger.debug('Calling Login endpoint with body: %o', req.body);
            try {
                const { email, password } = req.body;
                const authServiceInstance = Container.get(AuthService);
                const { user, token } = await authServiceInstance.SignIn(email, password);
                return res.status(200).json({ status: true, message: 'Logined Successfully !', data: { user, token } });
            } catch (e) {
                logger.error('🔥 error: %o', e);

                return res.status(400).json({ status: false, message: e.message, data: {} });
            }
        });

    router.route('/forgot-password')
        .post(middlewares.forgotPasswordValidate, async (req: Request, res: Response) => {
            const logger = Container.get('logger') as any;

            try {
                const { email } = req.body;
                const authServiceInstance = Container.get(AuthService);

                const token = CryptoJS.AES.encrypt(req.body.email + Date.now(), process.env.CRYPTOKEY as string);
                const url = `${req.get('origin')}/auth/reset-password?token=` + encodeURIComponent(token.toString())

                logger.debug('Calling forgot-password endpoint with body: %o', url);

                await authServiceInstance.ForgotPassword(email, token, url);

                return res.status(200).send({
                    status: true,
                    message: 'Your Reset Password has been generated and send it to your mailID',
                    data: {}
                });

            } catch (e) {
                logger.error('🔥 error: %o', e);
                return res.status(400).json({ status: false, message: e.message, data: {} });
            }
        })

    router.route('/reset-password')
        .put(middlewares.resetPasswordValidate, async (req, res) => {

            const logger = Container.get('logger') as any;

            try {
                const { token, password } = req.body;
                const authServiceInstance = Container.get(AuthService);

                logger.debug('Calling reset-password endpoint with body: %o', req.body);

                await authServiceInstance.ResetPassword(token, password);

                return res.status(200).json({
                    status: true,
                    message: 'Your Reset Password has been generated and send it to your mailID',
                    data: {}
                });

            } catch (e) {
                logger.error('🔥 error: %o', e);
                return res.status(400).json({ status: false, message: e.message, data: {} });
            }
        })

    app.use('/user', router)

    router.route('/change-password')
        .post(middlewares.getXuser, middlewares.passwordValidate, async (req: any, res: Response) => {

            const logger = Container.get('logger') as any;

            try {
                const { oldPassword, newPassword } = req.body;
                const authServiceInstance = Container.get(AuthService);

                logger.debug('Calling reset-password endpoint with body: %o', req.body);

                await authServiceInstance.ChangePassword(req.user._auth, oldPassword, newPassword);

                return res.status(200).send({
                    status: true,
                    message: 'Password Change Successfully !',
                    data: null
                });

            } catch (e) {
                logger.error('🔥 error: %o', e);
                return res.status(400).json({ status: false, message: e.message });
            }
        })

    router.route("/logout")
        .post(middlewares.getXuser, async (req: any, res: Response) => {

            const logger = Container.get('logger') as any;
            logger.debug('Calling Login endpoint with body: %o', req.user._id, req.body);

            try {
                const authServiceInstance = Container.get(AuthService);
                const session = await authServiceInstance.Logout(req.user._id, req.body.deviceId);
                return res.status(200).send({
                    status: !!session,
                    message: session ? 'Logout Successfully' : 'Session not found',
                    data: session
                });
            } catch (e) {
                logger.error('🔥 error: %o', e);
                return res.status(400).json({ status: false, message: e.message });
            }
        })
}