#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 8967;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance!");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your balance is ${myBalance}.`);
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastCashAmount = 50;
        if (fastCashAmount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= fastCashAmount;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
