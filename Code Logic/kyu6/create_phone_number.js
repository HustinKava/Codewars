function createPhoneNumber(numbers){
// console.log('numbers provided:', numbers)
// Adding characters at specific index positions
    numbers.splice(0, 0, "(")
    numbers.splice(4, 0, ")")
    numbers.splice(5, 0, " ")
    numbers.splice(9, 0, "-")
// console.log(numbers)
    const phoneNumber = numbers.join("")
// console.log(phoneNumber)
    
    return phoneNumber
    
}

// Alternate method I saw after submit
// function createPhoneNumber(numbers){
//     numbers = numbers.join('');
//     return '(' + numbers.substring(0, 3) + ') ' 
//         + numbers.substring(3, 6) 
//         + '-' 
//         + numbers.substring(6);
//   }