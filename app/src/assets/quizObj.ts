export default [
  {
    question: 'true + false - true',
    answers: ['SyntaxError', 'NaN', '1', '0']
  },
  {
    question: '!!!\'""\'',
    answers: ['true', 'false', 'SyntaxError', '1']
  },
  {
    question: 'true == "true"',
    answers: ['SyntaxError', 'false', 'true', 'null']
  },
  {
    question: '[,,,1,,].length',
    answers: ['1', 'SyntaxError', '5', '6']
  },
  {
    question: '[] + `${20}`',
    answers: ['NaN', 'null', '[20]', "'20'"]
  },
  {
    question: "new Error('Error') + 40",
    answers: ['41', 'SyntaxError', "'Error40'", "'Error: Error40'"]
  },
  {
    question: 'NaN + 20 - (2 * !true)',
    answers: ['SyntaxError', 'NaN', 'null', '20']
  },
  {
    question: 'typeof NaN',
    answers: ['NaN', 'TypeError', "'undefined'", "'number'"]
  },
  {
    question: 'this + 50 ^ 2',
    answers: ['2', 'SyntaxError', "'[object global]2500'", 'NaN']
  },
  {
    question: 'typeof null',
    answers: ["'null'", "'undefined'", 'TypeError', "'object'"]
  },
  {
    question: 'NaN + 0 === NaN + 0',
    answers: ['true', 'false', 'SyntaxError', 'null']
  },
  {
    question: "['a', 'b', 'c', 'd'] + [1, 2, 3, 4]",
    answers: ["'a,b,c,d1,2,3,4'", "'a,b,c,d,1,2,3,4'", "'abcd1234'", 'NaN']
  },
  {
    question: '0.1 + 0.2 === 0.3',
    answers: ['false', 'true', 'SyntaxError', 'NaN']
  },
  {
    question: '20,6',
    answers: ['20.6', '6', '20', 'NaN']
  },
  {
    question: '-1 + null',
    answers: ['NaN', '-1', '0', 'null']
  },
  {
    question: 'Infinity + []',
    answers: ['Infinity', 'SyntaxError', '[Infinity]', "'Infinity'"]
  },
  {
    question: '-1 + (null - null)',
    answers: ['-1', 'NaN', '-Infinity', '0']
  },
  {
    question: '050 + -03',
    answers: ['47', '0.2', '-2.5', '37']
  },
  {
    question: '"" - - ""',
    answers: ['NaN', '0', 'SyntaxError', 'null']
  },
  {
    question: 'typeof [] + "" - - "" + {a: 25} ** 25 ?? 0',
    answers: ['NaN', "'number'", 'TypeError', 'Maybe on another day']
  }
];
