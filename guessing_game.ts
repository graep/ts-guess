import promptSync from 'prompt-sync';  // npm package that allows you to do synchronous prompting in node.js script
const prompt = promptSync();  // assigning "prompt" to the promptSync method

function getValidGuess(promptText: string, min: number, max: number): number {
  while(true) {
    const input: string = prompt(promptText);
    const guess: number = Number(input);

    if (Number.isNaN(guess)) {
      console.log("That's not a number! Try again");
    } else if (guess < min || guess > max) {
      console.log("Your guess isn't between ${min} and ${max}! Try again");
    } else {
      return guess;
    }
  }
}

function playRound(target: number, maxTries: number): void {
  let attempts: number = 0;

    while(attempts < maxTries) {
      const guess: number = getValidGuess(
      `Guess a number (${1}-${100}): `, 1, 100);
      attempts++
      
      if (guess === target) {
        console.log(`You got it in ${attempts} ${attempts === 1 ? 'try' : 'tries'}!`);
        return;
      }
      console.log(guess < target ? "Too low!" : "Too high!");
    }
    console.log(`Game over! You've used all your tries. The number was ${target}.`);
}

function main(): void {
  const target: number = Math.floor(Math.random() * 100) + 1;
  const maxTries: number = 5;

  playRound(target, maxTries);
}

main();