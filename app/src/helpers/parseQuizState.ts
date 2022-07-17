import { Player, QuizState } from "@/types";

export const parseQuizState = (state: QuizState): Player => ({
  name: state.name,
  country: state.country,
  stats: {
    corrects: state.corrects,
    points: state.points,
    time: state.time
  },
  createdAt: state.createdAt
})