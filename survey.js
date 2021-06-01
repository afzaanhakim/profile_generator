const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let information = [];

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  information.push(`My name is ${answer}`);

  rl.question(`What\'s an activity you like doing?`, (answer) =>
  {
    information.push(`I like ${answer}`);

    rl.question('What do you listen to while doing that?', (answer) => 
    {
      information.push(`I love ${answer} music`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => 
      {
        information.push(`My favorite meal is  ${answer}`);

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => 
        {
          information.push(`I like eating ${answer}`);

          rl.question(`Which sport is your absolute favourite?`, (answer) => 
          {
            information.push(`${answer} is my absolute favorite!`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => 
            {
              information.push(`My superpower is ${answer} is my absolute favorite!`)

              
              rl.close();
            });
          });
        });
      });
    });
  });
})
