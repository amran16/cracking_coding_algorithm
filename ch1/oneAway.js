function oneEdit(s1, s2){
  
//Get length of both strings 
  var len1 = s1.length;
  var len2 = s2.length;
  
//Get size difference
  var sizeDiff = Math.abs(len1 - len2)
  
  if (sizeDiff > 1) return false;
    

  var count = 0;
  var i = 0, j = 0; 
  
  while (i < len1 && j < len2) {

    /** If both characters are same then, increase both pointers **/
    if (s1[i] === s2[j]) {
        i++;
        j++;
    } else if (sizeDiff === 1) {
         /**
         * If they are not same and size is also not same then, 
           increase larger string index
         * For example
         * string1 = pale && string2 = ple
         * string1 = ple  && string2 = pale
         **/
        if (len1 > len2) {
            i++;
        //} else if(len2 > len1){
        } else {
            j++;
        }
        /** Update operation counter **/
        count++;

    } else {
        /** If characters are not same but strings are same length **/
        i++;
        j++;
        count++;
    }

    /** If number of operation is greater than or equal to 2 then false **/
    if (count > 1) {
        return false;
    }
}
  return true;
}
console.log(oneEdit('car', 'caram'))  // false - difference length > 1
console.log(oneEdit('sale', 'bake'))  // flase - 2 letter different
console.log(oneEdit('pale', 'ple'))   // true - 1 different
console.log(oneEdit('ple', 'pale'))  // true - 1 different
console.log(oneEdit('bae', 'bake'))  // true - 1 different
console.log(oneEdit('pole', 'gale')) // false - 2 different
console.log('\n')

function oneEdit(s, t) {
  
  var m = s.length, n = t.length;
  
  if (Math.abs(m - n) > 1) return false;
  
  for (var i = 0; i < Math.min(m, n); i++) {

    if (s.charAt(i) !== t.charAt(i)){ 

      if (m == n) return s.substring(i + 1) === (t.substring(i + 1));

      if (m > n)  return s.substring(i + 1) === (t.substring(i));

      else return s.substring(i) === (t.substring(i + 1));
      
    }
  }
  return m === n; 
  //Only last char different. eg."abcd" "abc". Rule out equal case "abc" "abc" 
}
console.log(oneEdit('car', 'caram'))  // false - difference length > 1
console.log(oneEdit('sale', 'bake'))  // flase - 2 letter different
console.log(oneEdit('pale', 'ple'))   // true - 1 different
console.log(oneEdit('ple', 'pale'))  // true - 1 different
console.log(oneEdit('bae', 'bake'))  // true - 1 different
console.log(oneEdit('pole', 'gale')) // false - 2 different
console.log('\n')

var oneEdit = (s1, s2) => {

    //if (Math.abs(s1.length - s2.length) > 1) {

  if((s1.length - s2.length && s2.length - s1.length) > 1){
       return false;
  }

  var foundDifference = false;

  for(var i = 0, j = 0; i < s1.length && j < s2.length; i++, j++){
    
    if(s1[i] !== s2[j]){
      if(foundDifference){
        return false;
      }
      if (s1.length > s2.length) {
        j--;
      }
      else if (s1.length < s2.length) {
        i--;
      }
      foundDifference = true;
    }
   }
    return true;
}
console.log(oneEdit('car', 'caram'))  // false - difference length > 1
console.log(oneEdit('sale', 'bake'))  // flase - 2 letter different
console.log(oneEdit('pale', 'ple'))   // true - 1 different
console.log(oneEdit('ple', 'pale'))  // true - 1 different
console.log(oneEdit('bae', 'bake'))  // true - 1 different
console.log(oneEdit('pole', 'gale')) // true - 1 different


