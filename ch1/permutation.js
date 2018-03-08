// Time: O(n)
// Additional space: O(n)

// 2 = 2  !2 = false  obj = {d: 1, g:0, c:1, f:0}

// obj['g'] = 0  !obj['g'] = true
// obj['d'] = 1  !obj['d'] = false

// if(obj['d']): will give you true, becuase its value is 1 
// if(obj['g']): will give you false, becuase its value is 0 

function isPermutstr1tion(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    var dict = {};

    for (var x = 0; x < str1.length; x++) {
          var l = str1[x];

      if(!dict[l]){
        dict[l] = true;
      }else{
        dict[l]++
      }

      //  //dict[l] ? dict[l]++ : dict[l] = 1;
      //  dict[l] = dict[l] ? dict[l]++ : 1;
    }
    for (var y = 0; y < str2.length; y++) {
      var m = str2[y]

        if(!dict[m]){
          return false
        }else{
          dict[m]--;
        }
    }
    return true;
}
console.log(isPermutstr1tion("dog", "hello")); // false
console.log(isPermutstr1tion("dog", "ogg")); // false
console.log(isPermutstr1tion("lemon", "melon")); // true
console.log(isPermutstr1tion("gog", "dog")); // false
console.log(isPermutstr1tion("man", "fan"));  //false
console.log(isPermutstr1tion("dog", "god")); // true
console.log(isPermutstr1tion("Bok", "bok"));   //false
console.log('//////////////////////////////////////')

function isPermutstr1tion1(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    var dict = {};

    for (var x = 0; x < str1.length; x++) {
        var l = str1[x];

      if(!dict[l]){
        dict[l] = 1;
      }else{
        dict[l]++
      }
       //dict[l] = dict[l] ? dict[l] + 1 : 1;
    }

    for (var y = 0; y < str2.length; y++) {
      var m = str2[y]

        if(dict[m]){
          dict[m]--;
        }else{
          dict[m] = 1
        }
        //dict[m] = dict[m] ? dict[m] - 1 : 1;
    }

    for (var key in dict) {
      if (dict[key] !== 0)
       return false;
    }

    return true;
}
console.log(isPermutstr1tion1("dog", "hello")); // false
console.log(isPermutstr1tion1("lemon", "melon")); // true
console.log(isPermutstr1tion1("gog", "dog")); // false
console.log(isPermutstr1tion1("dog", "ogg")); // false
console.log(isPermutstr1tion1("man", "fan"));  //false
console.log(isPermutstr1tion1("dog", "god")); // true
console.log(isPermutstr1tion1("Bok", "bok"));   //false
console.log('//////////////////////////////////////')

//This is also called Permutation problem
// Time: O(N lg N)
// Additional space: O(1)
function permutationChecker(str1, str2){

  if(str1.length !== str2.length || str1.length === 0 || str2.length === 0) return false;

  //sorting strings using quicksort
  return (str1.split('').sort().join() === str2.split('').sort().join())


}
console.log(permutationChecker('hey', ''))
console.log(permutationChecker('lemon', 'melon'))
console.log(permutationChecker('', 'book'))
console.log(permutationChecker('acb', 'cab'))
console.log(permutationChecker('apple', 'cat'))
console.log(permutationChecker('book', 'Book'))
console.log(permutationChecker('gog', 'dog'))
