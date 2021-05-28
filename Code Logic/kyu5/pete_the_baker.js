function cakes(recipe, available) {
  
    //Taking keys of each object provided
    const recipeKeys = Object.keys(recipe)
    const availableKeys = Object.keys(available)
    
    // If the available object is missing a key from the recipes object then return 0  
    if(!recipeKeys.every(ing => availableKeys.indexOf(ing) > -1)) return 0
    
    // Storing the key value pairs in variables
    const availableArr = Object.entries(available)
    const recipeArr = Object.entries(recipe)
    
    // Global empty array for the remainders
    const enoughForArr = []
    
    // Creating a nested for loop to check if the key from the recipe array matches the key from the available array   
    for(var i = 0; i< recipeArr.length; i++){
      console.log("looking for", recipeArr[i][0], recipeArr[i][1])
      
      for(var j = 0; j < availableArr.length; j++){
        console.log("availArr", availableArr[j][0], availableArr[j][1])
        
        // If there is a match then divide the availableArr value from the recipeArr value and round it down
        // Then push it into the enoughForArr array       
        if(recipeArr[i][0] === availableArr[j][0]){
          enoughForArr.push(Math.floor(availableArr[j][1] / recipeArr[i][1]))      
          continue
        }
      }
    }
    // Returning the lowest number in the enoughForArr array to find out how many cakes can be made!   
    return Math.min(...enoughForArr)
  }