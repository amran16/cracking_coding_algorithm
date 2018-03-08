function strCompression(str) {

  var result = [],
      count = 1;

  for(var i = 0; i < str.length; i++){
  	if(str[i] === str[i+1]){
  	    count++;
  	}else{
  		result.push(str[i] + count);
  		count = 1;
  	}
  }
  return result.join('');
}
console.log(strCompression("aabbcde"));
console.log(strCompression("wwwbbbw"));
console.log(strCompression("wwwggopp"));
console.log(strCompression("aabcccccaaa"));
console.log(strCompression("abc"));
console.log(strCompression("   "));
