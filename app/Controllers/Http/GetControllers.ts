import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class GetControllers {
  async getLeaderboard ({ response }: HttpContextContract) {
    response.status(200)
    return {
      success: true,
      data: {}
    }
  }
}