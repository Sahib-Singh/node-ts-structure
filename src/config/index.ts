import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" Unable to find .env file !!!");
}

const envData: any = envFound.parsed;

export default {


  nodeEnv: envData.NODE_ENV,

  port: parseInt(envData.PORT, 10),

  databaseURL: envData.MONGODB_URI,

  api: {
    prefix: '/api',
  },

  swagger: {
    prefix: '/swagger',
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  jwtSecret: process.env.JWT_SECRET,

  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(String(process.env.AGENDA_CONCURRENCY), 10),
  },


} as any;