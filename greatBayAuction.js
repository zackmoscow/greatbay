var mysql = require("mysql");
var inquirer = require('inquirer')
var fs = require("fs");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "greatbay_db"
});

let optionsArray;

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("Showing all available items...\n");
    
    main();
  });



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
      type: 'input',
      message: 'Which item do you want to bid on?',
  },
  {
      name: 'bidValue',
      type: 'number',
      message: 'How much would you like to bid?'
  }
]

const collectInputs = async function () {
  let questions;

  const { postOrBid } = await inquirer.prompt(actionType);
  //decide what the specific question will be
  if(postOrBid === 'post an item'){
    questions =  postQuestions
  }
  if(postOrBid === 'bid on an item'){
    connection.query("SELECT * FROM items", function(err, res) {
      if (err) throw err;
      console.log(res);
    },
    questions = bidQuestions;
  // ask the specific question and whether they want to do add more ppl
  const results = await inquirer.prompt(questions);
  results.postOrBid = postOrBid;

  return results;
};

const main = async function () {
  const answers = await collectInputs();
  if(answers.postOrBid === 'post an item'){
    createBid(answers)
  };
//   if(input.postOrBid === 'bid on an item'){addBid(input)};
}



function createBid(input) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO items SET ?",
      {
        name: input.itemName,
        description: input.description,
        bid: input.startingBid
      },    
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
      }
    );
    console.log(query.sql);
}

// function addBid() {
//     console.log("Updating all Short quantities...\n");
//     var query = connection.query(
//       "UPDATE products SET ? WHERE ?",
//       [
//         {          
//           if(bid <= /*SELECTED BID*/){
//               console.log("The value you entered is less than the current");
//           }else{
//             bid: // Entered value
//           }
//         },
//         {
//           id: /*SELECTED ID*/
//         }
//       ],
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " products updated!\n");
//         readBid();
//       }
//     );

//     function readBid() {
//         console.log("Selecting all products...\n");
//         connection.query("SELECT * FROM products", function(err, res) {
//             if (err) throw err;
//             console.log(res);            
//         });
//     }
})