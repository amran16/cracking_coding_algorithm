// * N = |str1|
// * Time: O(N)
// * Additional space: O(N)

function strRotation (str1, str2){

  if(str1.length !== str2.length) return false

  var string = str1 + str2;

  return  string.includes(str2)
}

console.log(strRotation('waterbottle', 'erbottlewat'), true);
console.log(strRotation('waterbottle', 'erbotlewatt'), true);
console.log(strRotation('aaat', 'aataa'), false);
