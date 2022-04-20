import { HttpContext } from "@adonisjs/core/build/standalone";

export default class PutControllers {
  async updatePlayer (ctx: HttpContext) {
    ctx.response.status(200)
    return {
      success: true,
      data: {}
    }
  }
}