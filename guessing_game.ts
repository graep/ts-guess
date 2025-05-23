import promptSync from 'prompt-sync';  // npm package that allows you to do synchronous prompting in node.js script
const prompt = promptSync();  // assigning "prompt" to the promptSync method

function randomBetween (min: number, max: number): number {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;  // classic way of getting a random integer. + defines the range + shifts whole range up by 'min'
  return rand;  // returns rand integer
}

const target = randomBetween(1, 100);  // assigns the random number generator to 'target' variable

while (true) {
  const guess = Number(prompt('Guess a number between 1 and 100: '));  // assigns 'guess' variable to a prompt that asks the user for a guess and converts it to a number
    if (guess < 1 || guess > 100) {
      console.log("That isn't between 1 and 100!"); 
      continue;
    } 

    if (Number.isNaN(guess)) {
        console.log("That isn't even a number!");
      continue;
    }

    if (guess === target) {
        console.log("You got it!");  // conditional that determines if the guess is === to the target to indicate a correct guess   
      break;
    }  

  console.log(guess < target ? "Too low" : "Too High");  // template literal that checks if the guess is lower or higher than the target and logs whichever it is.
}