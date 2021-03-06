// **1. Where Have My Four Letter Words Gone?**
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

console.log('1. Where Have My Four Letter Words Gone?');

const isFourLetters = arr => {
    let myArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            myArray.push(arr[i]);
        }
    }
    return myArray;
};

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"])); // ➞ ["John", "Jack"]
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"])); // ➞ ["Corn"]
console.log(isFourLetters(["Dog", "Cat", "Deer"])); // ➞ ["Deer"]



// **2. Months.**
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
console.log('2. Months');

const monthName = num1 => {
    let myCalendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    let myMonth = '';
    switch (num1) {
        case 1:
            return myMonth = myCalendar[0];
            break;
        case 2:
            return myMonth = myCalendar[1];
            break;
        case 3:
            return myMonth = myCalendar[2];
            break;
        case 4:
            return myMonth = myCalendar[3];
            break;
        case 5:
            return myMonth = myCalendar[4];
            break;
        case 6:
            return myMonth = myCalendar[5];
            break;
        case 7:
            return myMonth = myCalendar[6];
            break;
        case 8:
            return myMonth = myCalendar[7];
            break;
        case 9:
            return myMonth = myCalendar[8];
            break;
        case 10:
            return myMonth = myCalendar[9];
            break;
        case 11:
            return myMonth = myCalendar[10];
            break;
        case 12:
            return myMonth = myCalendar[11];
            break;
        default:
            return 'error';
    }
};

console.log(monthName(3)); // ➞ "March"
console.log(monthName(12)); // ➞ "December"
console.log(monthName(6)); // ➞ "June"


// **3. Amplify the Multiples of 4.**
// Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// * For each number in the array that can be evenly divided by 4, that number is amplified by 10 
// (i.e. return 10 times the number).
// * If the number cannot be divided evenly by 4, simply return the number.
// * The given integer will always be equal to or greater than 1.
// * Include the given number (the number in the parameters).
console.log('3. Amplify the Multiples of 4');

const amplify = number3 => {
    let mySum = [];
    for (let i = 1; i <= number3; i++) {
        if (number3[i] % 4 !== 0) {
            mySum += i++;
            console.log(mySum);
        }
        if (number3[i] % 4 === 0) {
            mySum = number3[i] * 10;
        }
        return mySum;
    }
};


console.log(amplify(4)); //  ➞ [1, 2, 3, 40]
// console.log(amplify(3)); // ➞ [1, 2, 3]
// console.log(amplify(25)); // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 
// 200, 21, 22, 23, 240, 25]

// **4. One is not like the others...**
// Create a function that takes an array of numbers and return the number that's unique.
console.log('4. One is not like the others');

const unique = array => {
    for (let i = 0; i < array.length; i++) {
        // console.log('indexof ->', array.indexOf(array[i]));
        // console.log('lastindexof ->', array.lastIndexOf(array[i]));
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            return array[i];
        }
    }
};
console.log(unique([3, 3, 3, 7])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0


// **5. Word Ranking.**
// Create a function that takes a string of words and returns the highest scoring word. 
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// * The returned string should only contain alphabetic characters (a-z).
// * Preserve case in the returned string (see 4th example above).
console.log('5. Word Ranking.');



// Examples:
// * wordRank("The quick brown fox.") ➞ "brown"
// * wordRank("Nancy is very pretty.") ➞ "pretty"
// * wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// * wordRank("Today is Wednesday.") ➞ "Wednesday"


// **6. c4n y0u r34d th15?**
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. 
// **NB:** for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 
// 'i's with 1, 'o's with 0, and 's's with 5.
console.log('6. c4n y0u r34d th15?');


const hackerSpeak = str => {
    let newArr = str.split(' ');
    let hackArr = [];
    for (let i = 0; i < newArr.length; i++) {
        hackArr.push(newArr[i].replace(/a/gi, 4).replace(/o/gi, "0").replace(/e/gi, "3").replace(/i/gi, "1").replace(/s/gi, "5"));
        //  console.log(hackArr);
    }
    return hackArr.join(' ');
};


console.log(hackerSpeak("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")); // ➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")); // ➞ "b3c0m3 4 c0d3r"