import { Router } from 'express';
import config from '../../config';

export default () => {
  const app = Router();

  if (config.nodeEnv == 'development') {
    const swaggerJSDoc = require('swagger-jsdoc')
    const swaggerUi = require('swagger-ui-express')

    let options = {
      definition: {
        info: {
          title: "Authentication Service",
          version: '1.0.0',
        },
        basePath: '/api'
      },
      apis: [
        './src/apis/swagger/auth/swagger.js',
        './src/apis/swagger/subscriber/swagger.js',
        './src/apis/swagger/query/swagger.js',
        './src/apis/swagger/project/swagger.js',
        './src/apis/swagger/blog/swagger.js',
        './src/apis/swagger/website/swagger.js',
        './src/apis/swagger/settings/swagger.js',
        './src/apis/swagger/member/swagger.js',
        './src/apis/swagger/forms/swagger.js',
        './src/apis/swagger/event/swagger.js'

      ]
    };
    let swaggerSpec = swaggerJSDoc(options);
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
      customCss: '.swagger-ui .topbar { display: none }'
    }));
  }

  return app;
};