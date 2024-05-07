import inquirer from "inquirer";

const answer: {
    sentence:"string"
} = await inquirer.prompt({
    name:"sentence",
    type: "input",
    message: "please write your sentence for count your sentence word:.. " ,

})

const word = answer.sentence.trim().split("")
console.log(`your sentence word is... ${word.length}`)
   


