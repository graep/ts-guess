import promptSync from 'prompt-sync';
const prompt = promptSync();

function randomBetween (min: number, max: number): number {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}

const target = randomBetween(1, 100);

while (true) {
  const guess = Number(prompt('Guess a number: '));
  if (guess === target) {
    console.log("You got it!");
    break;
  }
  console.log(guess < target ? "Too low" : "Too High");
}