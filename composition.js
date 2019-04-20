// Composition

const f = x => x * 2;
const g = x => x * 3;

// console.log(f(g(5)));

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str}${str}`;

// console.log(repeat(exclaim(scream('I love coffee'))));

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat,
  exclaim,
  scream
);

// console.log(withExuberance('I love coffee'));

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const withPipedExuberance = pipe(
  scream,
  exclaim,
  repeat
);

// console.log(withPipedExuberance('I love coffee'));

module.exports = { scream, exclaim, repeat, compose };
