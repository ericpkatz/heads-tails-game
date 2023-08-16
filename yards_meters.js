function convertToMeters(yards){
  const meters = yards *  0.9144;
  return meters;
}

function createMessage(yards, meters){
  console.log(`You entered ${yards} yards. Which is is ${meters} meters.`);
  let message;
  if(yards === 1760){
    message = 'This is a mile';
  }
  else if(yards === 100){
    message = 'This is a football field';
  }
  else if(yards === 26){
    message = 'This is a tennis court';
  }
  else {
    message = `Dunno what ${yards} is. Try again!`;
  }
  return message;

}

let inputYards = window.prompt('enter a number for yards');
inputYards = inputYards * 1;
console.log(`Input yards: ${inputYards}`);
const meters = convertToMeters(inputYards);
const msg = createMessage(inputYards, meters);
console.log(msg);
