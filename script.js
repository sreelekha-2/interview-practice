console.log('Hello!');
var object = new (function () {
  this.name = 'Sudheer';
})();
console.log(object);

//object literals
//object create method
//object constructor new Object()
//function constructor
//class instantiation
const newObj = Object.create({});
newObj.age = 20;
console.log(newObj);
let proto = Object.getPrototypeOf(object);
console.log(proto);
let proto2 = Object.getPrototypeOf(proto);
console.log(proto2);
let proto3 = Object.getPrototypeOf(proto2);
console.log(proto3);

const person1 = { fname: 'sree', lname: 'lekha' };
const person2 = { fname: 'soumya', lname: 'sree' };

function fullName(greeting) {
  console.log(`${greeting} My Name is ${this.fname} ${this.lname}`);
}
// console.log(newObj.__proto__);

fullName.call(person1, 'Hi');
fullName.call(person2, 'Hello');

fullName.apply(person1, ['Good Mng']);

let myFullName = fullName.bind(person1);

console.log(myFullName('How are you?'));

const numArr = [1, 2, 3, 4, 5, 6];
const returnAr = numArr.splice(2, 2);
console.log(numArr);
console.log(returnAr);

(function add(a, b) {
  console.log(a + b);
})(2, 3);

let uri = 'employeeDetails?name=john&occupation=manager';
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri);
console.log(decoded_uri);
