// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  
    // Creating a variable that contains regex alphabet and symbols
    var alphabet = /^[a-zA-Z0-9]*$/;
    var symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    
    // Putting the string into an array with each word having an index position   
    const wordArr = str.split(' ');
    
    // Created a global empty array  
    const joined = []
    
    // Looping through the wordArr array    
    for (let i = 0; i < wordArr.length; i++) {
          
          // Checking to see if the first character matches a letter from the alphabet variable        
          if(wordArr[i].charAt(0).match(alphabet)) {
            
            // Storing the first letter in its own variable
            // Storing the remainder of whats left of the word without the first character in a variable           
            // Then pushing both variables + "ay" to the joined array           
            var firstLetter = wordArr[i][0]
            var secondPart = wordArr[i].slice(1)
            joined.push(secondPart + firstLetter + "ay")
            
          // Else if the word has 1 character and it matches a character from the symbols array
          // Push the symbol without "ay" to the joined array           
          } else if (wordArr[i].length === 1 && wordArr[i].match(symbols)) {
            joined.push(wordArr[i])
          }
    }
    // Finally returning the joined and array and converting it back into a string with spaces   
    return joined.join(' ')
  }