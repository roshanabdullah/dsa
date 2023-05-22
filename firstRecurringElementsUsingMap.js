function firstRecurringElements2(arr){

  let map = {}; // creating an empty hash map

  // performing the loop on arr
  for(let i=0; i<arr.length; i++){

    //check if the element already exists in the map e:g, [1, 1] here 1 already exists then return the recurring element immediately
    if(map[arr[i]] !== undefined){
      return arr[i];
    }
      // else if the element is the first time being seen for example [1] is seen first time then sets the index of map object to true 
    else {
      map[arr[i]] = true;
    }

  }

  // if there are no recurring elements then return undefined
  return undefined;
}


console.log(firstRecurringElements2([3, 5, 1, 2, 0, 5, 1, 2, 4])) // O(n)
