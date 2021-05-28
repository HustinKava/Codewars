function positiveSum(arr) {
    console.log(arr)
    
    let total = 0
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 ) {
        total += arr[i]
      }
      console.log(total)
    }
    
    return total
  }
  
  