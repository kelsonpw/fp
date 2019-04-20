// Associative Property

// 1 + 2 + 3
// (1 + 2) + 3
// 1 + (2 + 3)

const { compose, scream, exclaim, repeat } = require('./composition');

const withExuberance = compose(
  repeat,
  exclaim,
  scream
);

const str = 'I love fp';

console.log(withExuberance(str));

const repeatExcitedly = compose(
  repeat,
  exclaim
);

console.log(
  compose(
    repeatExcitedly,
    scream
  )(str)
);

const screamLoudly = compose(
  exclaim,
  scream
);

console.log(
  compose(
    repeat,
    screamLoudly
  )(str)
);
