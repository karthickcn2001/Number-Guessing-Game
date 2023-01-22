//Practice Exercise 5.1 (90)
//Number guessing game
let num = Math.floor(Math.random()*10);
console.log(`This is array index: ${num}`); //generates a random number between 1 & 10
let arr = [1,2,3,4,5,6,7,8,9,10];
let compGuess = arr[num];//In each page reload a random number is selected in the array. and i assigned it to the var compGuess
console.log(`This is array value: ${compGuess}`);
console.log(arr);
var input = prompt('Make your guess between 1 & 10: ');
var userGuess = Number(input);//converted the user input to number.
console.log(`This is the first user guess: ${userGuess}`);
while ((userGuess !== compGuess) || (userGuess === compGuess)){
if (userGuess === compGuess){
        document.write(`Great! That's my guess.`);
        break;
}
else if(userGuess > compGuess){
    inp = prompt(`Your guess is big. Enter a small number: `);
    userGuess = Number(inp);
    console.log(`This number is going to be compared next: ${userGuess}`);
}
else if(userGuess < compGuess){
    inp = prompt(`Your guess is small. Enter a big number: `);
    userGuess = Number(inp);
    console.log(`This number is going to be compared next: ${userGuess}`);
}
}  
