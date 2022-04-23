import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Logger from '@ioc:Adonis/Core/Logger';
import { bgYellow, white, green } from 'colors';

const X_RESPONSE_TIME = 'X-Response-Time';

export default {
  logger: async (
    { request, response }: HttpContextContract,
    next: () => Promise<unknown>
  ) => {
    await next();
    const responseTime = response.getHeader(X_RESPONSE_TIME);
    Logger.info(green(`${request.method} ${request.url}`));
    Logger.warn(bgYellow(white(`${String(responseTime)}`)));
  },
  responseTime: async (
    { response }: HttpContextContract,
    next: () => Promise<unknown>
  ) => {
    const start: number = Date.now();
    await next();
    const ms: number = Date.now() - start;
    response.header(X_RESPONSE_TIME, `${ms}ms`);
  }
};
