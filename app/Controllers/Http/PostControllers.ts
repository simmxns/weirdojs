import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import hasBody from 'Helpers/hasBody';
import Leaderboard from 'Models/Leaderboard';

export default class GetControllers {
  async addPlayer({ request, response }: HttpContextContract) {
    const body = request.body();

    if (!hasBody(body)) {
      response.status(400);
      return {
        success: false,
        message: 'no body provided'
      };
    }

    const { flag, name, stats } = body;
    const leaderboard = new Leaderboard({
      name,
      stats,
      flag
    });

    await leaderboard.save()
    
    response.status(200);
    return {
      success: true,
      data: leaderboard
    };
  }
}
