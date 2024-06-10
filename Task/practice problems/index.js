// Question 1
// Interviewer: Rana, imagine you have an array like [3, 7, 11, 2, 9]. How would you write JavaScript code to find the sum of all these numbers ?
function sum(array) {
    let result = 0;
    array.forEach(val => {
        result += val;
    });

    console.log(result);
}

// sum([3, 7, 11, 2, 9]);

// Question 2
// Interviewer : Rana, imagine you're given a number, say num, and you need to determine whether it's even or odd.How would you write JavaScript code to do that ?
function findEvenOdd(val) {
    if (val % 2 === 0) {
        console.log(`${val} is Even`);
    } else {
        console.log(`${val} is Odd`);
    }
}

// findEvenOdd(3)


// Question 3
// Interviewer : Rana, imagine you have a string, for example, "hello", and you need to reverse it to "olleh" using JavaScript.How would you approach this problem ?
function reverseString(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }

    console.log(reverse);
}

// reverseString('hello')

// Question 4
// Interviewer : Rana, suppose you're given a string, such as "radar", and you need to determine whether it's a palindrome(reads the same forwards and backwards).How would you approach this problem using JavaScript?
function palendrome(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }

    if (str === reverse) {
        // console.log(reverse);
        console.log(`${reverse} is palendrome`);
    } else {
        console.log(`${reverse} is not palendrome`);
    }
}

// palendrome('radar')

// Question 5
// Interviewer: Rana, imagine you have an array with duplicate elements, like[1, 2, 3, 3, 4, 5, 5, 6], and you need to write JavaScript code to remove these duplicates and return a new array with unique elements.How would you approach this problem ?
function removeDuplication(numbers) {
    let uniqueNumbers = numbers.filter((value, index, array) => {
        return array.indexOf(value) === index;
    });

    console.log(uniqueNumbers);
}

// removeDuplication([1, 2, 3, 3, 4, 5, 5, 6])


// Question 6
// Interviewer : Rana, suppose you have an array of numbers, such as [5, 10, 2, 8, 3], and you need to write JavaScript code to find the largest and smallest numbers in this array.How would you approach this problem ?
function findLargestSmallest(arr) {
    let biggest = arr[0], smallest = arr[0];

    arr.forEach(val => {
        if (val > biggest) {
            biggest = val
        } else if (val < smallest) {
            smallest = val
        }
    });

    console.log(`biggest number is ${biggest} and smallest number is ${smallest}`);
}

// findLargestSmallest([5, 10, 2, 8, 3])


// Question 7
// Interviewer : Rana, imagine you have an array of elements, such as ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'], and you need to write JavaScript code to count the occurrences of each element in the array.How would you approach this problem ?





// Question 8
// Interviewer : Rana, suppose you have an array of numbers, such as [5, 2, 9, 1, 7], and you need to write JavaScript code to sort these numbers in ascending order.How would you approach this problem ?





// Question 9
// Interviewer : Rana, suppose you're given a non-negative integer, such as 5, and you need to calculate its factorial (which is the product of all positive integers less than or equal to that number). How would you approach this problem using JavaScript?






// Question 10
// Interviewer: Rana, suppose you're given two strings, such as "listen" and "silent", and you need to determine whether they are anagrams of each other (i.e., if they contain the same characters in the same quantities, but in a different order). How would you approach this problem using JavaScript?





// Question 11
// Interviewer: Rana, imagine you're given a sentence, such as "Hello world, how are you?", and you need to reverse the order of the words in the sentence so that it becomes "you? are how world, Hello". How would you approach this problem using JavaScript?





// Question 12
// Interviewer: Rana, suppose you're given a string, such as "programming", and you need to find the first non-repeating character in the string (i.e., a character that appears only once in the string). How would you approach this problem using JavaScript?




