// **1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, 
// and the second argument being a number. The function should return the elements of the array which are greater 
// than the second argument. 

// i.e. 

// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1]);
    }
    if (myArray[2] > myNumber) {
        console.log(myArray[2]);
    }
};

// const findGreatest = (myArray, myNumber) => {
//     for(let i=0; i<myArray.length; i++) {
//         if(myArray[i] > myNumber) {
//             return myArray[i];
//         }
//     }
// };
findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);



// **2. For the longest word.**
// Create a function to find the longest word in a given string. 

// i.e. longestWord("this is a web development course") ➞  "development"


const longestWord = (myString) => {
    let newArray = myString.split(' ');
    if (newArray[0].length > newArray.length) {
        console.log(newArray[0]);
    }
    if (newArray[1].length > newArray.length) {
        console.log(newArray[1]);
    }
    if (newArray[2].length > newArray.length) {
        console.log(newArray[2]);
    }
    if (newArray[3].length > newArray.length) {
        console.log(newArray[3]);
    }
    if (newArray[4].length > newArray.length) {
        console.log(newArray[4]);
    }
    if (newArray[5].length > newArray.length) {
        console.log(newArray[5]);
    }
};

longestWord("this is a web development course"); // ➞  "development"



// **3. Reverse.**
// Create a function to reverse a number. 

// i.e. reverse(34532) ➞ 23543

const myReverse = (n) => {
    return n.toString().split("").reverse().join("");
};
console.log(myReverse(34532));

// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels 
// (i.e. in English, "a, e, i, o, u") in the string. 

// i.e. findVowels("this is a string") ➞ 4

const findVowels = (s) => {
    let sum = 0;
    for (i = 0; i < s.length; i++) {
        if ((s[i] === "a") || (s[i] === "e") || (s[i] === "i") || (s[i] === "o") || (s[i] === "u")) {
            sum++;
        }
    }
    return sum;
};
console.log(findVowels("this is a string"));
console.log(findVowels("stop smoking"));





// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples: 
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 
console.log('5. Missing Number');

const missingNums = (array) => {
    for (let i = 1; i <= 10; i++) {
        if (array.indexOf(i) === -1) {
            return i;
        }
    }
};

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));





// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 

// Examples: 
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0
console.log('6. Cubed');

const sumOfCubes = (array) => {
    let newSum = 0;
    for (let i = 0; i < array.length; i++) {
        newSum += Math.pow(array[i], 3);
    }
    return newSum;
};
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
console.log('7. Dictionary');

const dictionary = (string, array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(string)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:** 
// * If there are no even numbers, return an empty array. 
// * Do not include 0. 
console.log('8. Even Number Generator.');

const evenNums = (number => {
    let resultArray = [];
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            resultArray.push(i);
        }
    }
    return resultArray;
};
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(1));



// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, 
// symbols and punctuation are not included in the string.

// i.e. alphaOrder("webdev") ➞ "bdeevw" //
console.log('Bonus: Alphabetical Order');

const alphaOrder = (string) => {
    let alphaArray = string.toLowerCase().split('');
    console.log(alphaArray);
    return alphaArray.sort().join('');
};

console.log(alphaOrder('Webdev'));