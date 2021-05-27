function tickets(peopleInLine) {
  
    // Setting global variables that start from a count of 0 dollars
    var twentyFive = 0;
    var fifty = 0;
    var oneHundred = 0;
    
    // Looping through the people in line and conditional checking
    for (var i = 0; i < peopleInLine.length; i++) {
      
    // If the customer in line gives 25 then we add 25 to our twentyFive variable
      if (peopleInLine[i] === 25) {
        twentyFive += 25
      }

    // If the customer in line gives 50 then we add 50 to our fifty variable
    // If the twentyFive variable is equal to 0 then we return NO because we do not have enough change to give back
    // If twentyFive is equal to 25 or greater then we have change to give back and we subtract 25 from the twentyFive variable
      else if (peopleInLine[i] === 50) {
        fifty += 50;
        if (twentyFive === 0) {
          return "NO";
        }
        else {twentyFive -= 25};
      }
      
    // If the customer in line gives 100 then we add 100 to our oneHundred variable
    // If our fifty variable is equal to 50 and the twentyFive variable is equal to 25, then we subtract 50 and 25 from their variables to give back as change
    // If the fifty variable is equal to 0 but our twentyFive variable is equal to 75 or higher, then we subtract 75 from twentyFive to give back as change
    // Else return NO if we don't have the correct change to give back
      else if (peopleInLine[i] === 100) {
        oneHundred+= 100;
        
        if(fifty >= 50 && twentyFive >= 25) {
          fifty -= 50;
          twentyFive -= 25;
        }
        else if(fifty === 0 && twentyFive >= 75) {
          twentyFive -= 75;
        }
        else return "NO";
      }
    }
    return "YES";
  }