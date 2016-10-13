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

  for (var i=0; i < phrase.length; i++) {
    // if (['a', 'e', 'i', 'o', 'u'].indexOf(newString) === -1) {
    //   return result += (newString + 'o' + newString);
    // }
    if (newString !== 'a' || 'e' || 'i' || 'o' || 'u') {
      return result += (newString + 'o' + newString)
    } else {
      return result += newString;
    }
  }
  return result.join('')
}

console.log(rovarspraket('this is fun'));
