// Immutable data

// Mutable can be changed after creation
// Immutable cannot be changed after creation

const a = [1, 2, 3];
const b = a;

b.push(4);
console.log(a);

const c = { foo: 'bar' };
const d = c;
d.foo = 'baz';
console.log(c.foo);

const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

const e = [1, 2, 3];
const f = push(4)(e);
console.log({ e, f });

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);

console.log(mg1 === mg2);
console.log(mg1.amount === mg2.amount);

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
  }
}

const mg3 = new ImmutableGlass('water', 100);
const mg4 = mg3.takeDrink(20);

console.log(mg3 === mg4);
console.log(mg3.amount === mg4.amount);
console.log(mg3.amount, mg4.amount);
