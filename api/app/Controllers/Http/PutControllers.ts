import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Leaderboard from 'Database/Models/Leaderboard';
import schema from 'Schemas/Leaderboard';
import { validator } from '@ioc:Adonis/Core/Validator';

export default class PutControllers {
  async update({ request, response, params }: HttpContextContract) {
    const data = request.body();

    await validator
      .validate({ schema, data })
      .then(async json => {
        const updated: any = await Leaderboard.findByIdAndUpdate(
          params.id,
          {
            $set: {
              name: json.name,
              country: json.country,
              'stats.correct': json.stats.correct,
              'stats.time': json.stats.time,
              'stats.points': json.stats.points
            }
          },
          { new: true }
        );
        response.ok(updated);
      })
      .catch(e => {
        if (e.name === 'CastError')
          response.notFound({ message: 'user not found' });

        if (e.name === 'ValidationException')
          response.badRequest({ message: 'no acceptable body' });
      });
  }
}
