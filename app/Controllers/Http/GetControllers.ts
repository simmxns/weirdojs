import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Leaderboard from 'Models/Leaderboard';

export default class GetControllers {
  async getLeaderboard({ response }: HttpContextContract) {
    const data = await Leaderboard.find({});

    response.status(200);
    return {
      success: true,
      data
    };
  }
}
