import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { validator } from '@ioc:Adonis/Core/Validator';
import Leaderboard from 'Models/Leaderboard';
import schema from 'Schemas/Leaderboard';

export default class PostControllers {
  public async store({ request, response }: HttpContextContract) {
    const data = request.body();

    await validator
      .validate({ schema, data })
      .then(async json => {
        const leaderboard = new Leaderboard(json);
        await leaderboard.save();
        response.ok(leaderboard);
      })
      .catch(() => response.badRequest({ message: 'no acceptable body' }));
  }
}
