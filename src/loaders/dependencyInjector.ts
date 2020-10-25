import { Container } from 'typedi';
import LoggerInstance from './loggers';
import agendaFactory from './agenda';


export default ({ mongoConnection, models }: { mongoConnection: any; models: { name: string; model: any }[] }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    const agendaInstance = agendaFactory({ mongoConnection });

    Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);
    // Container.set('emailClient', mailgun({ apiKey: config.emails.apiKey, domain: config.emails.domain }))

    LoggerInstance.info('✌️ Agenda injected into container');

    return { agenda: agendaInstance };
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};