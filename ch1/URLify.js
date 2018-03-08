function URLify(url, num) {

  if (!url || url.length === 0) {
    return url;
  }

  url = url.split('');
  let spaceCount = 0;
  for (let i = 0; i < num; i++) {
    if (url[i] === ' ') {
      spaceCount++;
    }
  }
  // add an extra 2 characters for each space
  let index = num + spaceCount * 2;

  for (let i = num - 1; i >= 0; i--) {
    if(url[i] === ' ') {
      url[index - 1] = '0';
      url[index - 2] = '2';
      url[index - 3] = '%';
      index = index - 3;
    }
    else {
      url[index - 1] = url[i];
      index--;
    }
  }
  return url.join('');
}
console.log(URLify(' ', 13));
console.log(URLify('Mr John Smith ', 18));
console.log(URLify('hello there  ', 13));
