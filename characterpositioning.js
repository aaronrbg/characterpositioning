function characterPositioning (str) {
  var newStr = str.split(' ').join('').toLowerCase();
  console.log(newStr);
  var newObj = {};

  for (var i = 0; i < newStr.length; i++){

   if(newObj[newStr[i]]) {
      // console.log(newObj[newStr[i]]);
      newObj[newStr[i]].push(i);
    } else {
      newObj[newStr[i]] = [i];
    }

  }
  return newObj;
}
console.log(characterPositioning("Lighthouse In the house"));