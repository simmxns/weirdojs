import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default schema.create({
  name: schema.string.optional({ trim: true }),
  flag: schema.string.optional({ trim: true }),
  stats: schema.object().members({
    correct: schema.number(),
    points: schema.number(),
    time: schema
      .array([rules.minLength(3), rules.maxLength(3)])
      .members(schema.number())
  })
});
