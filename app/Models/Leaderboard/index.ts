import { Schema, model } from '@ioc:Mongoose';
import { LeaderboardStats } from './LeaderboardStats';

const leaderboardSchema = new Schema(
  {
    flag: {
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
  },
  { versionKey: false }
);

export default model('Leaderboard', leaderboardSchema, 'leaderboard');
