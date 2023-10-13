/* exported compact */
function compact(array) {
  const newArray = [];
  let newIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray[newIndex] = array[i];
      newIndex++;
    }
  }
  return newArray;
}
