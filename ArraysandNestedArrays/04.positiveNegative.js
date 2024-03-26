function solve(input) {
  let number = []
  for (const number of input) {
    if (number < 0) {
      number.unshift(number)
    } else {
      number.push(number)
    }
  }
  for (let i = 0; i < number.length; i++) {

    console.log(number[i]);
  }

} solve(['7', '-2', '8', '9'])

