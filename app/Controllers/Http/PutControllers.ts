import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PostControllers {
  async updatePlayer ({ response }: HttpContextContract) {
    response.status(200)
    return {
      success: true,
      data: {}
    }
  }
}