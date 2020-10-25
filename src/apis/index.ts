import { Router } from 'express';
import user from './routes/user';
import auth from './routes/auth';
import subscriber from './routes/subscriber';
import query from './routes/query';
import projects from './routes/projects';
import website from './routes/website';
import gateway from './routes/gateway';
import member from './routes/member';


export default () => {
  const app = Router();
  user(app);
  auth(app);
  subscriber(app);
  query(app);
  projects(app);
  website(app);
  member(app);

  gateway(app);

  return app;
};