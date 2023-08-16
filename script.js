let flip = Math.round(Math.random());
let guess = window.prompt('Enter a value of 1 or 0.');
guess = guess * 1;


if(guess !== 0 && guess !== 1){
  console.log(`Your guess was ${guess}. This is invalid. We need a 1 or a zero.`);
}
else if(flip === guess){
  console.log(`Your guess was ${guess}. Flip was ${flip}. You WON!!`);
}
else {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You LOST!!`);
}

flip = Math.round(Math.random());
guess = window.prompt('Enter a value of 1 or 0.');
guess = guess * 1;


if(guess !== 0 && guess !== 1){
  console.log(`Your guess was ${guess}. This is invalid`);
}
else if(flip === guess){
  console.log(`Your guess was ${guess}. Flip was ${flip}. You WON!!`);
}
else {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You LOST!!`);
}

flip = Math.round(Math.random());
guess = window.prompt('Enter a value of 1 or 0.');
guess = guess * 1;


if(guess !== 0 && guess !== 1){
  console.log(`Your guess was ${guess}. This is invalid`);
}
else if(flip === guess){
  console.log(`Your guess was ${guess}. Flip was ${flip}. You WON!!`);
}
else {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You LOST!!`);
}
