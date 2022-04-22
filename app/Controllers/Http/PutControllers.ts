import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import hasBody from 'App/Helpers/hasBody';
import Leaderboard from 'Models/Leaderboard';

export default class PutControllers {
  async updatePlayer({ request, response, params }: HttpContextContract) {
    const body = request.body();

    if (!hasBody(body)) {
      response.status(400);
      return {
        success: false,
        message: 'no body provided'
      };
    }

    try {
      const { name, stats, flag } = body;
      const updatedDoc = await Leaderboard.findByIdAndUpdate(params.id, {
        $set: {
          name,
          "stats.correct": stats.correct,
          "stats.time": stats.time,
          "stats.points": stats.points,
          flag
        }
      }, { new: true });

      response.status(200);
      return {
        success: true,
        data: updatedDoc
      };
    } catch {
      response.status(404);
      return {
        success: false,
        message: 'user not found'
      };
    }
  }
}
