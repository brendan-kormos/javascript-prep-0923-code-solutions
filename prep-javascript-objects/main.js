const person = {
  firstName: 'Brendan',
  lastName: 'Kormos',
  hobby: 'Snowboarding',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Professional Snowboarder';
console.log('Current job:', person.job);

person['previousJob'] = 'Krusty Krab Fry Cook';
console.log('Previous job:', person['previousJob']);

console.log(person);
