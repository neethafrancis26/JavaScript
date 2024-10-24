// Question1: Create variables with different data types available in JS and print their data types along with each variable name in the console.
var myName = 42;
let myString = "Neetha Francis";
const myBoolean = true;
let myUndefined;
let myNull = null;
let myArray = [1, 2, 3, 4];
let myObject = { name: "Neetha", age: 22 };
let mySymbol = "symbol";
let myBigInt = 9007199254740991n;

console.log(`myName: ${myName}, Type: ${typeof myName} `);
console.log(`myString: ${myString}, Type: ${typeof myString}`);
console.log(`myBoolean: ${myBoolean}, Type: ${typeof myBoolean}`);
console.log(`myUndefined: ${myUndefined}, Type: ${typeof myUndefined}`);
console.log(`myNull: ${myNull}, Type: ${typeof myNull}`);
console.log(`myArray: ${myArray}, Type: ${typeof myArray}`);
console.log(`myObject: ${myObject}, Type: ${typeof myObject}`);
console.log(`myBigInt: ${myBigInt}, Type: ${typeof myBigInt}`);
console.log(`mySymbol: ${mySymbol.toString}, Type: ${typeof mySymbol}`);

// Question 2: Write a JS program to show an alert message on the loading of the website.
window.onload = function () {
  alert("Hello World!");
};

// questio 3.a: Remove number "6" from the array and console the length of the array.
let myList = ["1", "2", "3", "4", "5", "6", "7"];
for (let i = 0; i < myList.length; i++) {
  if (myList[i] === "6") {
    myList.splice(i, 1);
    break;
  }
}
console.log(myList);
console.log("length of new array:", myList.length);

// Question 3.b: Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.
let arrayToNumber = ["1", "2", "3", "4", "5", "6", "7"];
let newArrayToNumber = [];
for (let i = 0; i < arrayToNumber.length; i++) {
  newArrayToNumber = arrayToNumber.map(Number);
}
console.log(typeof newArrayToNumber[3]);

// Question 3.c: Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.
var a = ["1", "2", "3", "4", "5", "6", "7"];
var len = a.length - 3;
for (let i = 0; i < a.length; i++) {
  if (i >= len) {
    a.splice(i, 3);
    break;
  }
}
console.log(`Array by deleting las elements: ${a}`);
a.unshift("one", "two");
console.log("Array aftr adding strings: " + a);

// Question 3.d: Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)
a = ["1", "2", "3", "4", "5", "6", "7"];
msg = "";
let sums = 0;
for (i in a){
    msg += a[i] + " ";
    sums +=Number(a[i]); 
}
console.log(msg)
console.log(sums);

// Question 3.e: Filter out item "3" from the array and console the array (use array method)
a = ["1", "2", "3", "4", "5", "6", "7"];
a = a.filter(function (a) {
  return a !== "3";
});
console.log("Filter element 3: " + a);

//Question 3.f: Iterate the array and console the item, when item is either "3", "6" or "7"
a = ["1", "2", "3", "4", "5", "6", "7"];
for (i of a){
    if (i==="3" || i==="6" || i==="7" ){
        console.log(`The elemennt is ${i}`);
    }
}

//Question 3.g: [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
a = ["1", "2", "3", "4", "5", "6", "7"];
var b = [1, 2, "3", 4, 5, 6, "7"];
for(let i=0; i<a.length; i++){
    for(let j = 0; j<b.length; j++){
        if(typeof a[i]=== typeof b[j]){
            console.log(`Element ${a[i]} and ${b[j]} have same data type of ${typeof a[i]}`);
        }
    }
}

//Question 3.h: [0, 2, 3, 7, 5, 6, 8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.
a = [0, 2, 3, 7, 5, 6, 8];
let result = 0;
for(i = 0 ;i<a.length; i++){
    result = a[i] * i; 
    if (result>=40){
        console.log("The result is: " + result );
    }
}

//Question 3.i: Create two arrays with five items each and merge the array into a single array and then console it.
a = [1, "2", "a", 4, 5];
b = [6, "7", 8, 9, "z"];
let c = [];
c = a.concat(b);
console.log(c);