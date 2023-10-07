function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(5, 5);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const convertHoursToMinutesResult = convertHoursToMinutes(4);
console.log('convertHoursToMinutesResult:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const getGreetingResult = getGreeting('Brendan');
console.log('getGreetingResult:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyBy5Result = addAndMultiplyBy5(2, 2);
console.log('addAndMultiplyBy5Result:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(10, 5);
console.log('multiplyAndDivideBy5Result:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersResult = subtractTwoNumbers(5, 2);
console.log('subtractTwoNumbersResults:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return Math.PI * radius * 2;
}

const getCircleCircumferenceResult = getCircleCircumference(7);
console.log('getCircleCircumferenceResult:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const getFullNameResult = getFullName('Brendan', 'Kormos');
console.log('getFullNameResult:', getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}

const cubeResult = cube(5);
console.log('cubeResult:', cubeResult);
