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

module.exports = {
  handleInput,
  printFeelings
}
