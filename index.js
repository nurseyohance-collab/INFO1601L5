function add(a, b){
   return a + b;//undefined + undefined = NaN
}

let ans = add(5, 1);
console.log(ans); //6

let ans2 = add();
console.log(ans2); //NaN
function add(a, b=10){
      return a + b;
}

console.log(add(5,11)); // logs 16

console.log(add(2));// logs 12
let sum = 10

function sum(){ //duplicate declaration error
}
function happyPrint(string){
 console.log("😀: "+string);
}

function sadPrint(string){
 console.log("😢: "+string);
}

//This high-order function adds 2 parameters and passes the answer to the callback
function add(a, b, callback){
   let ans = a + b;
   callback(ans);// call the callback and pass the answer to it
}

//call add passing the callbacks to it

add(5, 10, happyPrint);
//prints current date
function printDate(){
   console.log(Date().toLocaleTimeString());
}
      
setInterval(printDate, 1000);
let arr = []//empty array
let arr2 = [1, 2, 3, 4, 5, 6, 7]//initialize with elements
let arr3 = [1, 12.9, "Hi", '🎈', ]// heterogeneous array

console.log(arr[0]);// 1
console.log(arr3[3]);//🎈
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

for (let item of arr){// for of loop
   console.log(item);
}
let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));//true

arr.push(11);//adds item to the end

console.log(arr)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem == arr.pop();//removes last item

console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator
let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return element%2 !== 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = arr.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr.sort(intCompare)
console.log(ascending);
let person = {
  // key : value
  "name": "John",
  "age": 12
};

//we can print the values of a key in two ways
console.log(person["age"]);//Using an index
console.log(person.name);//referencing the key as a property

person["weight"] = 70;

person.marks = [67, 34, 55, 89];

let firstMark = person.marks[0];

//mixing array and objects
let people = [
  person,
  {
    name: "Jane",
    age: 23,
    marks: [51, 78, 99, 76]
  }
];

let johnClone = {};//empty object

//copying objects
Object.assign(johnClone, person);

console.log(johnClone);


console.log(people[0].marks[0]);//what is printed?
//Create a constructor a functions which builds object for us
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];
add(11, 12, sadPrint);
