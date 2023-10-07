// Use the below two arrays and practice array methods
let numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
let strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.
Clone the array before using sort method: [...arr]
*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentence"
let arr = [...strings];
console.log(strings.push('called', 'sentence'));

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));

// - Remove the first word in the array (strings)
console.log(strings.shift());

// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter((el) => el.includes('is')));

// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.filter((el) => el.indexOf('is') > 0));

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((el) => el % 3 == 0));

// - Sort Array from smallest to largest

// - Remove the last word in strings
console.log(strings.pop());

// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
console.log(numbers.reduce((el) => el % 2 == 0));

// - Find all the odd numbers
console.log(numbers.reduce((el) => el % 2 !== 0));

// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift('new'));

// - Make a subset of numbers array [18,9,7,11]


// - Make a subset of strings array ['a','collection']


// - Replace 12 & 18 with 1221 and 1881
console.log(numbers.join(' ').replace(12, 1221).replace(18, 1881).split(' '));

// - Replace words in strings array with the length of the word
let strLength = strings.map((el) => el.length);

// - Find the sum of the length of words using above question
console.log(
  strLength.reduce((sum, el) => {
    sum += el;
    return sum;
  }, 0)
);

// - Customers Array
let customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
console.log(customers.filter((el) => el.firstname.startsWith('J')));

// - Create new array with only first name
let newArray = customers.map((el) => console.log(el.firstname));

// - Create new array with all the full names (ex: "Joe Blogs")
let newArray2 = customers.map((el) =>
  console.log(el.firstname.concat(' ', el.lastname))
);

// - Sort the array created above alphabetically


// - Create a new array that contains only user who has at least one vowel in the firstname.
customers.filter((el) =>
  el.firstname.includes('a' || 'e' || 'i' || 'o' || 'u')
);
