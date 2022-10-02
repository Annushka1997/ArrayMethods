"use strict";

const btns = document.querySelectorAll('button');
const arr = [5,78,51,35,46,0,34,68,0,354,86,354,68,0,135,158,13,51,3,5153,531,0,51531,315,2,0,2,0,131,5];
const subArr = [1,2,[3,4,5],6,7,8,[9,10],11,12,13,[14,15,16],17,18];
const newUser = {
    firstName: "Anna",
    lastName: "Cholakhyan",
    userName: "Annushkach1997",
    email: "annushkach1997@mail.ru",
    age: 24,
    hobby: "programming"
};
const staff = [
    {
        name: "Margalita",
        lastName: "Mamulashvili"
    },
    {
        name: "Lena",
        lastName: "Petriashvili"
    },
    {
        name: "Barbare",
        lastName: "Kapanadze"
    }
];



// forEach
btns.forEach(item => item.addEventListener('click', function(){
    alert(item.textContent);
}));

btns.forEach(item => {
    if (item.classList.contains('btn')){
        console.log(true);
    }
});

// filter 1

function moveZeros (arr){
    return arr.filter(item => item !== 0);
}

console.log(moveZeros(arr));

// filter 2

function filteredArrayEven (arr){
    return moveZeros(arr).filter(item => item % 2 === 0); 
}

console.log(filteredArrayEven(arr)); 

// filter 3

function filteredArrayOdd (arr){
    return arr.filter(item => item % 2 !== 0); 
}

console.log(filteredArrayOdd(arr)); 

// filter 4 

function subArrays (arr){
    return Array.isArray(arr);
}

let newArr = subArr.filter(subArrays);
// alert(newArr); 
 
// filter 5

function getName (obj){
    return Object.keys(obj).filter(key => key == "firstName");
}

console.log(getName(newUser));

// map 1

function square (arr){
    return arr.map(item => item * 2);
}

const newArraySquare = square(arr);
console.log(newArraySquare);

// map 2 

function getStaffNames (arr) {
    let names = arr.map(function(val){
        return val.name;
    });
    return names;
}

console.log(getStaffNames(staff));

// map 3

function getLastNamesLength (arr){
    return arr.map(user => user.lastName);
}

console.log(getLastNamesLength(staff));

// map 4

function transformToUppercase (arr){
    let names = arr.map(function (val) {
        return val.toUpperCase();
    });
    return names;
}

console.log(transformToUppercase(getStaffNames(staff)));

// map 5

function getFullName (arr){
    const fullName = arr.map(function(val,i) {
        return `${i}: ${val.name} ${val.lastName}`;
    });
    return fullName;
}

console.log(getFullName(staff));

// reduce 1

function getSumOfArray(arr){
    let sum = arr.reduce((val,arg) => {
        return val+arg;
    },0);
    return sum;
}

console.log(getSumOfArray(arr));

// reduce 2

function oneArray (arr) {
    let res = arr.reduce((arg, val) =>{
        return arg.concat(val);
    },[]);
    return res;
}

console.log(oneArray(subArr));

// reduce 3

function getNumbersQuantity (arr){
    let num = 0;
    let res = arr.reduce((total,val) => {
        if (total < 10) {
            num++;
            return total + val;
        }
    });
    return num;
}

console.log(getNumbersQuantity(arr));

// reduce 4 

function getFullNameWithReduce (arr){
    const total = arr.reduce((total, val) => {
        return `
        ${total} ${val.name} ${val.lastName}
        `;
    },"");
    return total;
}

console.log(getFullNameWithReduce(staff));

// reduce 5 

function getBigNumber (arr){
    let res = arr.reduce((prev,item) => {
        if (prev < item) {
            return item;
        } else {
            return prev;
        }
    });
    return res;
}

console.log(getBigNumber(arr));

// reduce 6 

function getLittleNumber(arr){
    let res = arr.reduce((prev,item) => {
        if (prev > item) {
            return item;
        } else {
            return prev;
        }
    });
    return res;
}

console.log(getLittleNumber(arr));

// reduce 7 

function getIndexOfBigNumber (arr) {
    let res = arr.reduce((prev,item,index) => {
        if (item > prev[1]){
            return [index,item];
        } else {
            return prev;
        }
    },[0,arr[0]]);
    return res;
}

console.log(getIndexOfBigNumber(arr));

// reduceRight 8

function reverseArray(arr){
    let res = arr.reduceRight((total,value) => {
        return total.concat(value);
    },[]);
    return res;
}

console.log(reverseArray(arr));


// some 1

function isContainsEven (arr) {
    let res = arr.some(function(val) {
       return val % 2 === 0;
    });
    return res;
}

console.log(isContainsEven(arr));

// every 2

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

console.log(isPangram("abcd efghij klmno pqrs tuv w xyz"));

// fill 1 

function changingArray (arr){
    let res = arr.fill(77,7,8);
    return res;
}

console.log(changingArray(arr));

// find 1 

function getNumberOfArray (arr){
    let res = arr.find(item => item === 77);
    return res;
}

console.log(getNumberOfArray(arr));


// forEach

function forEach (arr, func){
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

forEach(arr, function(item) {
    console.log(item);
});

// map 

function map (arr,val) {
    let aggr = val;
    arr.forEach(function(val) {
        aggr += val;
    });
    return aggr;
}

console.log(map(arr,0));

// filter 

function filteredArray (arr,func){
    let res = [],
        index = 0;
    arr.forEach((item) => {
        if (func(item)) {
        res[index] = item;
        index++;
    }
    });
    return res;
}

console.log(filteredArray(arr,function(val){
    return val > 10;
}));

// reduce 

function reduce (arr,val) {
    let res = val;
    arr.forEach(function(val) {
        res += val;
    });
    return res;
}

console.log(reduce(arr,0));

