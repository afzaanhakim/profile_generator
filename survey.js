const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let information = []
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  information.push(`My name is ${answer}`);
  rl.question('What\'s an activity you like doing?)', (answer) => {
    information.push(`I like playing ${answer}`)
 
  rl.close();
});})