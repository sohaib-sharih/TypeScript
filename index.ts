import inquirer from "inquirer";
import chalk from 'chalk';

const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: chalk.blue("Please enter your 1st number: ")
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.red("Please enter your 2nd number: ")
    },
    {
        type: "list",
        name: "operator",
        choices: ['-','+','*','/'],
        message: chalk.greenBright("Please select your operation: ")
    }


])

const {numberOne, numberTwo, operator} = answers;

if (numberOne && numberTwo && operator) {
    let result: number = 0;
    if(operator=="-"){
        result = numberOne - numberTwo
    }else if(operator == "+"){
        result = numberOne + numberTwo;
    }else if(operator == "-"){
        result = numberOne - numberTwo;
    }else if(operator == "/"){
        result = numberOne / numberTwo;
    }else if(operator == "*"){
        result = numberOne * numberTwo;
    }
    console.log(result)
    
} else{
    console.log("Please enter a VALID number: ")
    
}