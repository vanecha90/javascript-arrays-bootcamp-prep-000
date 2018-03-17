var chocolateBars=[
  'sneakers',
  'hundred grand',
  'kitkat',
  'skittlesl'
  ]
  
function addElementToBeginningOfArray( array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
   return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, element){
<<<<<<< HEAD
  array.unshift(element)
  return array
=======
>>>>>>> a7abbad2b1a5fff13e039bf04cf8c6d096ea13c2
}

function addElementToEndOfArray(array, element){
  return[ ...array , element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
<<<<<<< HEAD
}
function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array)
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}


function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array){
 array.pop()
 return array
}
=======
}
>>>>>>> a7abbad2b1a5fff13e039bf04cf8c6d096ea13c2
