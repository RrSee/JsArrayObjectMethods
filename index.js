//1
let arr = [1,2,3,4,5]
function deletee(arr) {
    arr.pop()
    return arr
}
console.log(deletee(arr));

//2
function leng(arr) {
    return arr.length
}
console.log(leng(arr));

//3
function add(param,arr) {
    arr.push(param)
    return arr
}
console.log(add(6,arr))

//4
function add1(param,arr) {
    arr.unshift(param)
    return arr
}
console.log(add1(7,arr))

//5
let arrWords = ["a","b","c","d"]

function seperated(arr) {
    return arr.join(",")
}

console.log(seperated(arrWords));

//6
function slicee(begin,end,arr) {
    return arr.slice(begin,end)
}

console.log(slicee(1,4,arrWords));

//7
function index(index,arr) {
    return arr[index]
}

console.log(index(2,arr));

//8
function removeItem(arr, item) {
    return arr.filter(element => element !== item);
  }

console.log(removeItem(arr,4));

//9
let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function toArr(object) {
    const keyValue = Object.entries(person1)
    return keyValue
}

let arr2 = toArr(person1)
console.log(arr2);

//10
const employees = [
    {name: "Alice", salary: 4500},
    {name: "Bob", salary: 5200},
    {name: "Charlie", salary: 3900},
    {name: "Diana", salary: 4700}
];

function myCallback({ salary }) {
    return salary > 4600 ? "ok" : "low";
}

const result = Object.groupBy(employees,myCallback)

console.log(result);