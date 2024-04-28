#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 6984;
const pinAnswer = await inquirer.prompt([
    {
        name: "code",
        message: "Enter your PIN code:",
        type: "number",
    },
]);
if (pinAnswer.code === myPin) {
    console.log("Your PIN is correct!");
    const action = await inquirer.prompt([
        {
            name: "operation",
            message: "Select the operation to perform:",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (action.operation === "Withdraw") {
        const amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the withdrawal amount:",
                type: "number",
            },
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Withdrawal successful. Remaining balance: ${myBalance}`);
        }
    }
    else if (action.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (action.operation === "Fast Cash") {
        const fastCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the fast cash amount:",
                type: "list",
                choices: [20, 50, 100, 200],
            },
        ]);
        if (fastCashAnswer.amount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= fastCashAnswer.amount;
            console.log(`Fast cash withdrawal successful. Remaining balance: ${myBalance}`);
        }
    }
}
else {
    console.log(` your enter  wrong pin code`);
}
