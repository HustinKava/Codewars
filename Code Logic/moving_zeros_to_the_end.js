// move all zeros to the end of array while accounting for letters, numbers greater than 0, booleans, nulls and empty arrays/objects

var moveZeros = function (arr) {  
    //   console.log(arr)

    // Anything equal to 0 gets filtered into the zero variable
    var zero = arr.filter(zero => zero === 0)
    //   console.log(zero)
    
    // Anything not equal to 0 gets filtered into the notZero variable
    var notZero = arr.filter(more => more !== 0)  
    //   console.log(notZero)
    
    // The joined variabled joings the zero array onto the end of the notZero array with the concatinate method
    var joined = notZero.concat(zero)
    // console.log(joined)
    
    return joined
}