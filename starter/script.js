// Print text to the console

console.log("Hello world!");


// Variables

const userName = "Taru";
const favoriteAnimal = "Ares";


// Print text values in variables to the console

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal + ".");

// User interactions

alert("Welcome to the Full Stack Web Development course!");

const visitorName = prompt("What is your name?");

console.log(visitorName);

// create a personalized greeting message
console.log("Hello " + visitorName + "! Welcome to the Full Stack Web Development course!");

const  visitorFavoriteAnimal = prompt("What is your favorite animal?");
console.log("visitorName +! Your favorite animal is " + visitorFavoriteAnimal + ".");

if (visitorFavoriteAnimal === favoriteAnimal) {
    console.log("That's a great choice!");
}