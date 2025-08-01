const data = require('./data.json')
const prompt = require('prompt-sync')({ sigint: true })

let head = data;

const handleInput = (input, h) => {
  if (input > h.children.length || input <= 0) {
    return false
  }
  return true;
}

const printFeelings = (_head) => {
  _head.children.forEach((feeling, i) => {
    console.log(`${i + 1} :: ${feeling.name}`)
  })
}

const findFeeling = (_head = head) => {
  if (!_head.children) {
    console.log(`You are feeling ${_head.name.toLowerCase()}`)
    return _head.name;
  }

  printFeelings(_head);

  const question = prompt("How are you feeling right now?: ")

  while (true) {
    if (!handleInput(question, _head)) {
      console.log("[ERR] Invalid input; try again!")
    }
    break;
  }

  const newFeeling = findFeeling(_head.children[question - 1]);

  return newFeeling;
}

findFeeling();
