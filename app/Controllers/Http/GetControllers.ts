import { HttpContext } from "@adonisjs/core/build/standalone";

export default class GetControllers {
  async getLeaderboard (ctx: HttpContext) {
    ctx.response.status(200)
    return {
      success: true,
      data: {}
    }
  }
}