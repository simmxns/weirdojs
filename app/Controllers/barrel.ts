import GetControllers from './GetControllers'
import PostControllers from './PostControllers'
import PutControllers from './PutControllers'

const gets = new GetControllers()
const posts = new PostControllers()
const puts = new PutControllers()

export default {
  getLeaderboard: gets.getLeaderboard,
  addPlayer: posts.addPlayer,
  updatePlayer: puts.updatePlayer
}