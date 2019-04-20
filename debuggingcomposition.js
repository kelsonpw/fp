const { compose, scream, exclaim, repeat } = require('./composition');

const trace = msg => x => (console.log(msg, x), x);

const traceBug = trace('bug: ');

const withExuberance = compose(
  traceBug(repeat),
  exclaim,
  scream
);

const str = 'I love fp';

console.log(withExuberance(str));

const traceVal = msg => x => val => (console.log(msg, x(val)), x(val));

const str2 = 'i love dogs';
const traceBugVal = traceVal('omg a bug');

const withTraceExuberance = compose(
  repeat,
  traceBugVal(exclaim),
  scream
);

console.log(withTraceExuberance(str2));
