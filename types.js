//1спосіб
const arr = [true, 'hello', 90, 227, -200, false, 'false', 'word', 3.14, 'another string', null, {}, []];

const typeCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0
};

for (const item of arr) {
  typeCount[typeof item] += 1;
}

console.log(typeCount);

//динамічно

const arr1 = [true, 'hello', 90, 227, -200, false, 'false', 'word', 3.14, 'another string', null, {}, [], undefined];

const typeCount1 = {};

for (const item of arr1) {
  const type = typeof item;
  if (type in typeCount1) {
    typeCount1[type]++;
  } else {
    typeCount1[type] = 1;
  }
}

console.log(typeCount1);
