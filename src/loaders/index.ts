import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';

import mongooseLoader from './mongoose';
import Logger from './loggers';


export default async ({ expressApp }: any) => {

  const mongoConnection = await mongooseLoader();

  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      {
        name: 'userModel',
        model: require('../models/user').default,
      },
      {
        name: 'sessionModel',
        model: require('../models/session').default,
      },
      {
        name: 'reqPassModel',
        model: require('../models/passwordRequest').default,
      },
      {
        name: 'queryModel',
        model: require('../models/query').default,
      },
      {
        name: 'projectModel',
        model: require('../models/projects').default,
      },
      {
        name: 'subscriberModel',
        model: require('../models/subscriber').default,
      }
    ]
  });

  agenda.start();

  Logger.info('✌️ Dependency Injector loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');

}