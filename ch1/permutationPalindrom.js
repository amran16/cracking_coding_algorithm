// Time: O(n)
// Space: O(n)
const permutationPallindrom = (str) => {

  if(!str) return false

  str = str.toLowerCase().split(' ').join('').split('');

  let dic = {};
  let countOdd = 0;

  for(let i = 0; i < str.length; i++){

    let char = str[i];

     //dic[char] ? dic[char]++ : dic[char] = 1;
     //dic[char] = dic[char] ? dic[char] + 1 : 1;

      if(!dic[char]){
        dic[char] = 1
      }else{
        dic[char]++
      }
  }
  

  for(let k in dic){

    if(dic[k] % 2 !== 0) countOdd++;

    if(countOdd > 1) return false;

  }
  return true;
}
console.log(permutationPallindrom('viicc'))  //true
console.log(permutationPallindrom('civic')) //true
console.log(permutationPallindrom('civil')) //false
console.log(permutationPallindrom('Tact Coa'))  //true
console.log(permutationPallindrom('jact coa'))  //false
console.log(permutationPallindrom(' '))  //true
console.log('----------------------------------------------')

// Time: O(n)
// Space: O(n)
let isPalindromePermutationsSet = (str) => {

  str = str.toLowerCase();

  let chars = new Set();

  //for (let char of str) {
  for(var i = 0; i < str.length; i++){

    var char = str[i];

    if (char !== ' ') { // ignore spaces
      if (!chars.has(char)) {
        chars.add(char);
      }else {
        chars.delete(char);
      }
    }
  }
  //console.log(chars)
  return chars.size <= 1;
}
console.log(isPalindromePermutationsSet('Tact Coa')) //true
console.log(isPalindromePermutationsSet('civic9'))  //false
console.log(isPalindromePermutationsSet('!$&!&'))  //true
console.log(isPalindromePermutationsSet('ivicc'))  //true
console.log(isPalindromePermutationsSet(' '))  //true
