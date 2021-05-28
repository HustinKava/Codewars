function even_or_odd(number) {
    if (number % 2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
}

const eSSix = number => {
 return number % 2 === 0 ? "Even" : "Odd"
}


// console.log("Vanilla:", even_or_odd(4))
// console.log("ES6:", eSSix(7))