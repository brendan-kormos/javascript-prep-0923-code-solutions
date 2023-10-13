/* exported toObject */
function toObject(keyValuePair) {
  console.log(keyValuePair);
  return { [keyValuePair[0]]: keyValuePair[1] };
}
