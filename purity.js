// Pure Functions

// f(x) = x + 1;

const f = x => x + 1;

console.log(f(1) === 2);

// Ex 1 - Global State
const COST_OF_ITEM = 17;

const cartTotal = quantity => COST_OF_ITEM + quantity;

console.log(cartTotal(2));
console.log(cartTotal(2));

// Ex 2 - Same input, diff output

const generateID = () => Math.floor(Math.random() * 10000);

const createUser = (name, age) => ({
  id: generateID(),
  name,
  age,
});

console.log(createUser('Kelson', 26));
console.log(createUser('Kelson', 26));

// Ex 3 - Side Effects #1
let id = 0;
const createFoodItem = name => ({
  id: ++id,
  name,
});

console.log(createFoodItem('Cheese'));
console.log(createFoodItem('Milkshakes'));
console.log(id);
