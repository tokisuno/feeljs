const Feeling = require('../models/feeling');
const { Table } = require('console-table-printer');

/**
  * Validates user input. Checks whether input is a valid range (amount of options).
  * @function
  * @param {string} input - User input
  * @param {object} _head - Head of node to be checked
  */
const handleInput = (input, _head) => {
  if (input > _head.children.length || input <= 0) {
    return false
  }
  return true;
}

/**
  * Prints feelings from current node's head.
  * @function
  * @param {object} _head - Head of node to be checked
  */
const printFeelings = (_head) => {
  _head.children.forEach((feeling, i) => {
    console.log(`${i + 1} :: ${feeling.name}`)
  })
}

/**
  * Returns full dataset from MongoDB
  * @function
  * @async
  */
const feelingsInDb = async () => {
  const feelings = await Feeling.find({});
  return feelings.map(f => f.feeling);
}

/**
  * Prints the most recent 10 entries made by use
  * @function
  * @async
  */
const printLast10Feelings = async () => {
  const feelings = await Feeling.find({});

  const last10 = feelings.slice(-10);
  console.log(last10)

  const p = new Table();

  const locale = 'en-CA';

  last10.forEach((i) => {
    const date = new Date(i.date);
    p.addRow({
      feeling: i.feeling,
      date: date.toLocaleDateString(locale),
      time: date.toLocaleTimeString(locale, {
        hour: "2-digit", minute: "2-digit", hour12: false
      })
    });
  })

  p.printTable();
}

module.exports = {
  handleInput,
  printFeelings,
  feelingsInDb,
  printLast10Feelings
}
