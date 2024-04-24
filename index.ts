#! /usr/bin/env node
import inquirer from "inquirer";

const currencies:any = {
    "USD":1,
    "KWD":0.31,
    "EURO":0.94,
    "PKR":278.40,
    "UAE":3.67,
}
let userAns =await inquirer.prompt([
    { 
       name: "from",
       type:"list",
       message: "Select currency to convert from",
       choices:["USD", "KWD", "EURO", "PKR", "UAE"]
  },  
    {
      name: "to",
      type: "list",
      message: "Select currency to convert into",
      choices: ["USD", "KWD", "EURO", "PKR", "UAE"]


  },
     { 
       name: "amount",
       type: "input",
       message: "Enter the amount."
}
]);
let fromAmount = currencies[userAns.from];
let toAmount = currencies[userAns.to];
const convertedAmount = (userAns.amount / fromAmount ) * toAmount;
console.log (convertedAmount.toFixed(2))



