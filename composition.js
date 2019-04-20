// Composition

const f = x => x * 2;
const g = x => x * 3;

console.log(f(g(5)));

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str}${str}`;

console.log(repeat(exclaim(scream('I love egghead'))));

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withExuberance = compose(
  repeat,
  exclaim,
  scream
);

console.log(withExuberance('I love egghead'));
