#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let myPin = 3436;

let pinIn = await inquirer.prompt([
    {
        message: "Please Enter Your 4 Digit Pin",
        type: "number",
        name: "Pin"
    }
])
if(pinIn.Pin === myPin){
    console.log(chalk.green("\tSuccessfully Logged In\n"));


let operation = await inquirer.prompt([
    {
        message: "Select Transaction Method",
        type: "list",
        name: "method",
        choices:["Cash Withdraw","Fast Cash","Balance Inquiry"]
    }
])
if (operation.method === "Cash Withdraw") {
    let amountIn= await inquirer.prompt([
        {
            message: "Enter Amount",
            type: "number",
            name: "amount"
        }
    ])
    if(amountIn.amount > myBalance){
        console.log(chalk.red("Insufficient Balance"));
    }
    else{
        myBalance -= amountIn.amount;
        console.log(`Successfully withdraw : ${amountIn.amount}`);
        console.log(chalk.blueBright(`\nYour Balance is: ${myBalance}`));
    }
}
if (operation.method === "Fast Cash") {
    let amountFast= await inquirer.prompt([
        {
            message: "Select Amount",
            type: "list",
            name: "fast",
            choices:["1000","3000","5000","10000"]
        }
    ])
    if(amountFast.fast > myBalance){
        console.log(chalk.red("Insufficient Balance"));
    }
    else{
        myBalance -= amountFast.fast;
        console.log(`Successfully withdraw : ${amountFast.fast}`);
        console.log(`Your Balance is: ${myBalance}`);
    }
}

else if(operation.method === "Balance Inquiry"){
    console.log(`Your Current Balance is: ${myBalance}`);
}
}
else {
    console.log(chalk.red("Incorrect Pin!"))
}
