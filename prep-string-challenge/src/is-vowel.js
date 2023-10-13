/* exported isVowel */
const vowels = ['a', 'e', 'i', 'o', 'u'];
function isVowel(string) {
  if (vowels.includes(string.toLowerCase())) {
    return true;
  }
  return false;
}
