const inquirer = require ('inquirer');

const actionType =
    {
        name: 'postOrBid',
        type: 'list',
        message: "Do You want to:",
        choices : ['post an item', 'bid on an item']
    }

const postQuestions = [
    {
        name: 'itemName',
        type: 'input',
        message: 'item name: '
    },
    {
        name: 'description',
        type: 'input',
        message: 'describe your item'
    },
    {
        name: 'startingBid',
        type: 'number',
        message: 'what would you like the bidding to start at?'
    }
];

const bidQuestions = [
    {
        name: 'itemId',
        type: 'number',
        message: 'Which ID do you want to bid on?'
    },
    {
        name: 'bidValue',
        type: 'number',
        message: 'How much would you like to bid?'
    }
]

const collectInputs = async (inputs = []) => {
    let questions;
  
    const { postOrBid } = await inquirer.prompt(actionType);
    //decide what the specific question will be
    if(postOrBid === 'post an item'){questions =  postQuestions};
    if(postOrBid === 'bid on an item'){questions = bidQuestions}
    // ask the specific question and whether they want to do add more ppl
    const results = await inquirer.prompt(questions);

    return results;
  };

  const main = async () =>{
    const inputs = await collectInputs();
    console.log(inputs)
  }

  main();

  module.exports = main;