// Time: O(n)
// Additional space: O(n)
function hasUniqChar0(str){

  var chars = new Set();
  var hash = {}

  for(var i = 0; i < str.length; i++){
    //var val = str[i];
    var val = str.charAt(i);

    if(hash[val] === undefined){  //if a str[i] doesn't exist in the chars object, asign 1 to it
    //if(!hash[val]){
      hash[val] = true;
    }
    else{
      return false;
      //return val;
    }

    // if(!chars.has(val)){
    //     chars.add(val)
    // }else{
    //     return false;
    // }

  }
  return true;
}
console.log(hasUniqChar0('hello'))
console.log(hasUniqChar0('helo'))
console.log(hasUniqChar0('hey man '))
console.log(hasUniqChar0('yep'))
console.log(hasUniqChar0('oakland'))
console.log('////////////////////////////')

function hasUniqChar1(str){

  var hash = {}

  var chars = new Set();

  for(var i = 0; i < str.length; i++){
    var val = str[i];

    // if(chars.has(val)){
    //   return false;
    // }
    // chars.add(val)

    if(hash[val]){
      return false;
     //return val;
    }
      hash[val] = true;
  }
  return true;
}
console.log(hasUniqChar1('hello'))
console.log(hasUniqChar1('helo'))
console.log(hasUniqChar1('hey man '))
console.log(hasUniqChar1('yep'))
console.log('////////////////////////////')

// Time: O(n^2)
// Additional space: O(1)
function hasUniqChar(str){

  for(var i = 0; i < str.length; i++){

    var val = str[i];

    //if(str.indexOf(val) !== str.lastIndexOf(val)){
    if(i !== str.lastIndexOf(val)){
      //'hello'.lastIndexOf(h) //0
      //'hello'.lastIndexOf(e) //1
      //'hello'.lastIndexOf(l) //3 this doesn't match i

      //''.lastIndexOf('') //0
      return false;
    }
  }
  return true;
}
console.log(hasUniqChar('hello'))
console.log(hasUniqChar('helo  pan'))
console.log(hasUniqChar('muna'))
console.log(hasUniqChar('hey you'))

console.log('////////////////////////////')

// Time: O(N lg N) this is not efficient
// Additional space: O(n)
function hasUniqChar2(str){

  str =  str.split('').sort();

  for (var i = 0; i < str.length; ++i) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(hasUniqChar2('hello'))
console.log(hasUniqChar2('helo pan'))
console.log(hasUniqChar2('hey man '))
console.log('////////////////////////////')

// Time: O(n^2) this is not efficient
// Additional space: O(1)

let allUniqueChars = (string) => {

  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(allUniqueChars('helllo'))
console.log(allUniqueChars('helo'))
