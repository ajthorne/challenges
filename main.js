// console.log('hi');

//array methods to remember --
//indexOf, filter, forEach, reduce


//example of indexOf
function getCount(str) {
  var vowelsCount = 0;

  let vowels = 'aeiou'
  //declaring my variable

  for (var i=0; i < str.length; i++) {
   if (vowels.indexOf(str[i]) !== -1) {
   //if it finds a vowel within a string, it will increment
   // it knows this because -1 means that it is not present
    vowelsCount++;
}
}
  return vowelsCount;
}

//string methods to remember --
//split(' ')
//join('')
//reverse('')
//replace(' ', '')
