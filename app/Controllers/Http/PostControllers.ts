import { HttpContext } from "@adonisjs/core/build/standalone";

export default class PostControllers {
  async addPlayer (ctx: HttpContext) {
    ctx.response.status(200)
    return {
      success: true,
      data: {}
    }
  }
}