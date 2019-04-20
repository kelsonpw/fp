// Higher Order FN

// 1.  Accepts a fn as arg
// 2   Returns a new fn

const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Call count ${++count}`);
    return fn(...args);
  };
};

const add = (x, y) => {
  return x + y;
};

const addWithCount = withCount(add);

addWithCount(1, 2);

addWithCount(3, 4);
