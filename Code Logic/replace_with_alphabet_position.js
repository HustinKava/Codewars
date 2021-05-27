function alphabetPosition(text) {
  
    // Putting text into an array, joining it into a string with no spaces and converting to lowercase  
    var storage = text.split(' ').join('').toLowerCase();
    
    // Removing all special symbols
    var removeSymbols = storage.replace(/[^a-zA-Z ]/g, "");
    
    //   Global alphabet array
    var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    // Creating a global numbers array to push j + 1 into it  
    var numberArray = []
    
    // Creating a nested for loop
    //  Looping through each letter in the string
    for (i = 0; i < removeSymbols.length; i++) {
      // Looping through the alphabet to find the number position + 1     
      for (j = 0; j < alphabet.length; j++) {
              
        if (removeSymbols[i] === alphabet[j]) {
          
    //   console.log(j + 1)
          numberArray.push(j + 1)
        
        }
      }  
    }
    
  //   console.log(typeof(storage))
  //   console.log(storage)
  //   console.log(removeSymbols)
  //   console.log(numberArray)
    
    //  Converting the numbers back into a string with a space
    var joinedNumbers = numberArray.join(' ')
    console.log(joinedNumbers)
    
    return joinedNumbers;
  }