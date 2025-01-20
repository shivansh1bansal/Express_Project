// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Random number:", randomNumber);

// Generate a random string of length 8
const randomString = Math.random().toString(36).substr(2, 8);

console.log("Random string:", randomString);

// Generate a random element from an array
const fruits = ["apple", "banana", "orange", "grape"];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log("Random fruit:", randomFruit);