// create your loops here.

function whileLoop1() {
  const newArray = [];
  let iter = 0;
  while (iter < 10) {
    newArray.push(iter);
    iter++;
  }
  return newArray;
}
console.log('whileLoop1 Result', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let iter = 0;
  while (iter < 10) {
    newArray.push(iter * 2);
    iter++;
  }
  return newArray;
}
console.log('whileLoop2 Result:', whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log('forLoop1 result', forLoop1());

function forLoop2() {
  const newArray = [];
  for (let i = 100; i > 0; i--) {
    newArray.push('Time till explosion' + i + '!');
  }
  return newArray;
}

console.log('forLoop2 result', forLoop2());

const object = {
  name: 'Brendan Kormos',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray = [];
  for (const i in object) {
    newArray.push(i);
  }
  return newArray;
}

console.log('forInLoop1 result:', forInLoop1(object));

function forInLoop2(object) {
  const newArray = [];
  for (const i in object) {
    /* what is the purpose of declaring i as a const? the code still works with just "i" and not "const i" */
    newArray.push(object[i]);
  }
  return newArray;
}

console.log('forInLoop2 result:', forInLoop2(object));
