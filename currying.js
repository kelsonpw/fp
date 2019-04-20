// Currying

function add(x) {
  return function(y) {
    return x + y;
  };
}

const addThree = add(3);

console.log(addThree(4));
console.log(addThree(6));

const add2 = x => y => x + y;
const add3 = add2(3);
console.log(add3(5));
console.log(add3(7));

// Arity

// 1 = unary
// 2 = binary
// 3 = ternary
// 4 = quaternary
