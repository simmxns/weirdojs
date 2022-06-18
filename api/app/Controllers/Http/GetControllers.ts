import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Leaderboard from 'Models/Leaderboard';

export default class GetControllers {
  public async show({ response }: HttpContextContract) {
    const data = await Leaderboard.find({});
    response.ok(data);
  }
}
