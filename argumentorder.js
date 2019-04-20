// Argument order

// const mapa = (arr, cb) => arr.map(cb);
// const mapb = (cb, arr) => arr.map(cb);

// const map = array => cb => array.map(cb);

// const arr = [1, 2, 3, 4, 5];
// const double = n => n * 2;

// const withArr = map(arr);

// console.log(withArr(double));
// console.log(withArr(n => n * 3));
// console.log(arr.map(n => n * 4));

const map = cb => array => array.map(cb);

const arr = [1, 2, 3, 4, 5];
const double = n => n * 2;

const withDouble = map(double);
console.log(withDouble(arr));
console.log(withDouble(withDouble(arr)));

// Most specific => least specific

const prop = key => obj => obj[key];

const propName = prop('name');

const people = [{ name: 'Jefe ' }, { name: 'Shirley' }, { name: 'Timmy' }];

console.log(people.map(propName));
