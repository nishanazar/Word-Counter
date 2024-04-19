import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.yellow.italic( "\n \twellcome to word counter app\t \n"));

const answers: {
    Sentence: string
 } = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word:"
        }
    ]
)
const words = answers.Sentence.trim().split(" ")

console.log(words);

console.log(chalk.red.bold(`Your sentence word count is ${words.length}`));






