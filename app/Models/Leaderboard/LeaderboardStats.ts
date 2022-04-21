import { Schema } from '@ioc:Mongoose';

export const LeaderboardStats = new Schema({
  correct: Number,
  time: [Number, Number, Number],
  points: Number
});
