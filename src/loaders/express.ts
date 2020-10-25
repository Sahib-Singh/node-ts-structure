import express from 'express';
import cors from 'cors';
import config from '../config';
import routes from '../apis';
import swagger from '../apis/swagger';

export default ({ app }: { app: express.Application }) => {

  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.enable('trust proxy');

  app.use(cors({ origin: true }));

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb' }));


  app.use(config.api.prefix, routes());
  app.use(config.swagger.prefix, swagger());

  app.use((req, res, next) => {
    const err: any = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });

}