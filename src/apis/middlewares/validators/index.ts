import authValidate from './auth';
import verify from './verify';
import projectValidate from './project';
import queryValidate from './query';
import subscriberValidate from './subscriber';
import userValidate from './user';


export default {
  ...authValidate,
  ...verify,
  ...projectValidate,
  ...queryValidate,
  ...subscriberValidate,
  ...userValidate,

};
