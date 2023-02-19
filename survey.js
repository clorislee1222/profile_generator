const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = 'Here is your profile information: \n';

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  result += `What do you think of Node.js? \n ${answer} \n`;
  rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    result += `What\'s your name? \n ${answer} \n`;
    rl.question('What\'s an activity you like doing?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      result += `What's an activity you like doing? \n ${answer} \n`;
      rl.question('What do you listen to while doing that?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        result += `What do you listen to while doing that?, \n ${answer} \n`;
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          result += `Which meal is your favourite (eg: dinner, brunch, etc.)? \n ${answer} \n`;
          rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            result += `What\'s your favourite thing to eat for that meal? \n ${answer} \n`;
            rl.question('Which sport is your absolute favourite?', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              result += `Which sport is your absolute favourite? \n ${answer} \n`;
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
                result += `What is your superpower? \n ${answer} \n`;
                console.log(result);
                rl.close();
              });
            })
          })
        })
      })
    })       
  })
});
