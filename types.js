//1спосіб
const arr = [true, 'hello', 90, 227, -200, false, 'false', 'word', 3.14, 'another string', null, {}, []];

const typeCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0
};

for (const item of arr) {
  const type = typeof item;
  if (typeCount.hasOwnProperty(type)) {
    typeCount[type]++;
  } else {
    typeCount[type] = 1;
  }
}

console.log(typeCount);

//динамічно

const arr = [true, 'hello', 90, 227, -200, false, 'false', 'word', 3.14, 'another string', null, {}, []];

const typeCount = {};

for (const item of arr) {
  const type = typeof item;
  if (type in typeCount) {
    typeCount[type]++;
  } else {
    typeCount[type] = 1;
  }
}

console.log(typeCount);
