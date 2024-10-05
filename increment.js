// перший inc
const a = 5;
inc1 = (x) => ++x;
let b = inc1(a);
console.dir({ a, b });

// другий inc
const inc2 = (num) => {
  num.n += 1;
}
const obj = { n: 5 };
inc2(obj);
console.dir(obj);
