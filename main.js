// console.log('hi');

//array methods to remember --
//indexOf, filter, forEach, reduce


//example of indexOf
function getCount(str) {
    var vowelsCount = 0;

    let vowels = 'aeiou'
        //declaring my variable

    for (var i = 0; i < str.length; i++) {
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
//substring(0,4)
//lastIndexOf


//object methods to remember --
//Object.keys()

let movies = [{
        title: 'Puff the Magic Dragon',
        duration: 90,
        stars: ['Kevin Spacey', 'Sissy Spacek']
    },

    {
        title: 'Puff the Magic Dragon',
        duration: 90,
        stars: ['Kevin Spacey', 'Sissy Spacek']
    },

    {
        title: 'Puff the Magic Dragon',
        duration: 90,
        stars: ['Kevin Spacey', 'Sissy Spacek']
    }
]

function printMovie(movie) {
    console.log(Object.keys(movie), Object.keys(movie).sort());
    console.log(movie.title + ' ' + 'lasts for' + ' ' + movie.duration + ' ' + 'minutes.' + ' ' + 'Stars:' + ' ' + movie.stars);
}

// printMovie(movie);


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// console.log(arr1)

function mostFrequent() {

    let obj = {};
    mostCommon = 0;
    let mode;
    arr1.forEach(function(item, i) {
        obj[item] = (obj[item] || 0) + 1
            // console.log(item);

        if (mostCommon < obj[item]) {
            mostCommon = obj[item];
            mode = item;
        }
    });
    return +mode;
    console.log(mode);
}

mostFrequent();

var mode = function mode(arr) {
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    });
    return +mode;
}


function squareSum(numbers) {
    // returns square of each number then adds together to get sum
    return numbers.map(function(number,i) {
        let numSquared = number * number;
        return numSquared;
    }).reduce((prev, curr, i, arr) => {
        //loops over entire array until end to get results
        return prev + curr;
    })
}
// console.log(squareSum([1, 2, 3, 4]));



function shortcut(string) {
    //returns word without vowels
    let newString = string.split('');
    console.log(newString);

    return newString.filter(function(letter, i, arr) {
      return ['a','e','i','o','u'].indexOf(letter) === -1
    }).join('');
}
// console.log(shortcut('carrot'));

function reverse(string) {
  //simple reversing a string function
  let newString = string.split('');
  return newString.reverse('').join('');
}
// console.log(reverse('theme is vegetables'));


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  let newString = phrase.split('');
  let result = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i=0; i < newString.length; i++) {
    if (vowels.indexOf(newString) === -1) {
    // if (newString[i] !== 'a' || 'e' || 'i' || 'o' || 'u') {
      // console.log(newString[i] + 'o' + newString[i]);
      result += (newString[i] + 'o' + newString[i])
    } else {
      // console.log(result += newString[i]);
      result += newString[i];
    }
  }
  return result;
}
// console.log(rovarspraket('this is fun'));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
  let vowels = ['a','e','i','o','u'];

  if (char === 'a' || char === 'i' || char === 'e' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }

  // using array method...
  if (vowels.indexOf(char) !== -1) {
    return true;
  } else {
    return false;
  }
}
// console.log(isVowel('a'));
// console.log(isVowel('r'));

function accum(str) {
  for (var i=0; i < str.length; i++) {
    console.log((str[i] + '-'));
  }
}
// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"


// #1 - Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The value of 0! is 1.
// Create the function factorial that receives n and returns n!. You have to use recursion.

function factorial(num) {
  if (num === 0) {
    return 1
  } else  {
    return num * factorial(num-1)
  }
}
// console.log(factorial(5));
//what if you wanted to show values in an array?


// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
function greet(language) {
	let language = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'}
}


function titleCase(title, minorWords) {
  let newPhrase = title.split(' ');
  let newMinor = minorWords.split(' ');
  let result = '';

  // for (var i=0; i < newPhrase.length; i++) {
    // console.log(newPhrase[i]);
    // console.log(newMinor);
    // if (newMinor[i] === newPhrase[i]) {
      // console.log(newMinor[i]);
    // }
  // }
  if (newMinor.indexOf(newPhrase) === -1) {
    
  }
  return result;
}

// if word is a minorword, don't capitalize

console.log(titleCase('a clash of KINGS', 'a an the of'));
// Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
// Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
