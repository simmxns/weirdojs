/**
 * Config source: https://git.io/Jfefn
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import { BodyParserConfig } from '@ioc:Adonis/Core/BodyParser';

const bodyParserConfig: BodyParserConfig = {
  whitelistedMethods: ['POST', 'PUT', 'GET'],
  json: {
    encoding: 'utf-8',
    limit: '1mb',
    strict: true,
    types: ['application/json']
  },
  raw: {
    encoding: 'utf-8',
    limit: '1mb',
    queryString: {},
    types: ['application/json']
  },
  form: {
    encoding: 'utf-8',
    limit: '1mb',
    convertEmptyStringsToNull: true,
    queryString: {},
    types: [],
  },
  multipart: {
    encoding: 'utf-8',
    limit: '20mb',
    convertEmptyStringsToNull: true,
    autoProcess: true,
    processManually: [],
    maxFields: 1000,
    types: []
  }
};

export default bodyParserConfig;
