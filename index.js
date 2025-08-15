const data = require('./data.json')
const mongoose = require('mongoose')

const prompt = require('prompt-sync')({ sigint: true })
const helper = require('./utils/helper');

const { default: chalk } = require('chalk');
const figlet = require('figlet');

const { default: _, oraPromise } = require('ora');

const Feeling = require('./models/feeling');

let head = data;

const findFeeling = async (_head = head) => {
  if (!_head.children) {
    console.log("You are feeling...");

    const feeling = new Feeling({
      feeling: _head.name,
      date: Date.now()
    })

    await oraPromise(feeling.save(), { spinner: "clock" })

    mongoose.connection.close();

    figlet(_head.name, { font: "Pagga" }, (error, data) => {
      if (error) {
        console.log(error)
        return;
      }
      console.log(data);
    })
    return;
  }

  helper.printFeelings(_head);
  const question = prompt(chalk.underline.green("How are you feeling right now?: "))

  console.clear();

  if (!helper.handleInput(question, _head)) {
    console.log("[ERR] Invalid input; try again!")
    findFeeling(_head);
  }

  const newFeeling = findFeeling(_head.children[question - 1]);

  return newFeeling;
}

findFeeling();
