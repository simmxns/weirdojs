import { Schema, model } from '@ioc:Mongoose';

const LeaderboardStats = new Schema(
  {
    correct: Number,
    time: [Number, Number, Number],
    points: Number
  },
  { _id: false }
);

const leaderboardSchema = new Schema(
  {
    country: {
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
