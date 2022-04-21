import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Leaderboard from 'Models/Leaderboard';

export default class GetControllers {
  async getLeaderboard({ response }: HttpContextContract) {
    const data = await Leaderboard.find({});
    console.log(data);
    response.status(200);
    return {
      success: true,
      data: {}
    };
  }
}
