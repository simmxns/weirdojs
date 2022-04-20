import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Mongoose } from 'mongoose'
import Env from '@ioc:Adonis/Core/Env';
import colors from 'colors'

export default class MongoProvider {
  constructor(protected app: ApplicationContract) { }

  public register() {
    const mongoose = new Mongoose()

    mongoose.connect(Env.get('MONGODB_URL'), {
      auth: {
        username: Env.get('MONGODB_USER'),
        password: Env.get('MONGODB_PWD')
      },
      authSource: Env.get('MONGODB_AUTH_SOURCE')
    })
      .catch(e => console.error(`[ ${colors.red('moongose')} ]: ${e}`))

    this.app.container.singleton('Mongoose', () => mongoose)
  }

  public async boot() { }

  public async ready() { }

  public async shutdown() {
    await this.app.container.use('Mongoose').disconnect()
  }
}
