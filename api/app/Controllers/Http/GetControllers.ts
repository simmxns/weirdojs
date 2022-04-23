import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Leaderboard from 'Database/Models/Leaderboard';

export default class GetControllers {
  async show({ response }: HttpContextContract) {
    const data = await Leaderboard.find({});
    response.ok(data);
  }
}
