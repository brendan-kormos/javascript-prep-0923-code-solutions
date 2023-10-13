/* exported reverse */
function reverse(array) {
  const newArray = [];
  let counter = 0;
  for (let i = array.length - 1; i > -1; i--) {
    newArray[counter] = array[i];
    counter += 1;
  }
  return newArray;
}
