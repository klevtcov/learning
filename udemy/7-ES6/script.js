// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
console.log(name6);

// ES5
function driverLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
        
        
    }
    console.log(firstName + ', born in ' + yearOfBirth  + ', is now officially allowed to drive a car.');
}

driverLicence5(true);

//ES6
function driverLicence6(passedTest) {
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
              
    }
    
    console.log(firstName + ', born in ' + yearOfBirth  + ', is now officially allowed to drive a car.');
}

driverLicence6(true);


let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
*/

// Lecture: Blocks and IIFEs
/*
{
    const a = 1;
    let b = 2;
    var c = 1;
}

//console.log(a + b);
console.log(c);

// ES5
(function() {
    var c = 3;
})();

//console.log(c);
*/

// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

// Lecture: Arrow functions
/*
const years = [1990, 1965,1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

// ES6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});

console.log(ages6);
*/

// Lecture: Arrow functions 2
/*
// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
       var self = this; document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

const box6 = {
    color: 'green',
    position: 1,
    clickMe: () => {
       
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = 
    function(friends) {
    
        var arr = friends.map(function(el)
        {
            return this.name + ' is friends with ' + el;    
        }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = 
    function(friends) {
    
        var arr = friends.map(el => `${this.name} is friends with ${el}`);
        console.log(arr);
}

new Person('Mike').myFriends6(friends);
*/

// Lecture: Destructuring
/*
// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

// ES6
const [name, age] = ['John', 26];

console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');


// ES5
var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue'
});


// ES6
const boxesArray6 = Array.from(boxes);
boxesArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5

for(var i = 0; i < boxesArray5.length; i-=-1) {
    
    if (boxesArray5[i].className === 'box blue') {
        continue;
    }
    
    boxesArray5[i].textContent = 'I changed to blue!';   
}


// ES6
for (const cur of boxesArray6) {
   // if (cur.className === 'box blue') {
   //        continue;
   //  }
    if (cur.className.includes('blue')) {
            continue;
        } 
    
    cur.textContent = 'I changed to blue!'; 
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full)

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
















