import { Schema, model } from "@ioc:Mongoose";
import { LeaderboardStats } from './LeaderboardStats'

const leaderboardSchema = new Schema({
  position: {
    type: Number,
    required: true,
    trim: true,
    unique: true
  },
  country_img: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  stats: {
    type: LeaderboardStats,
    required: true
  }
})

export default model('Leaderboard', leaderboardSchema, 'leaderboard')