var mysql = require("mysql");
var inquirer = require("/inquirer.js");
var fs = require("fs");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "auction_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createBid();
  });

  function createBid() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        name: /* item name*/,
        description: /*item description*/,
        bid: /*starting bid*/
      },    
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );

    console.log(query.sql);
}

function addBid() {
    console.log("Updating all Short quantities...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {          
          if(bid <= /*SELECTED BID*/){
              console.log("The value you entered is less than the current");
          }else{
            bid: // Entered value
          }
        },
        {
          id: /*SELECTED ID*/
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
        readBid();
      }
    );

    function readBid() {
        console.log("Selecting all products...\n");
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            console.log(res);            
        });
    }
