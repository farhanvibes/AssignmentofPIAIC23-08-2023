"use strict";
// 1. Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 2 * i; // Even numbers are multiples of 2
    }
    return sum;
}
const n = 5; // You can change this value to calculate the sum for a different number of even numbers
const result = sumOfEvenNumbers(n);
console.log(`The sum of the first ${n} even numbers is: ${result}`);
// 2.  Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function printEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can replace this with your own array of numbers
printEvenNumbers(numArray);
// 3.  Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
function filterOddNumbers(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can replace this with your own array of numbers
const oddNumbersArray = filterOddNumbers(numberArray);
console.log("Odd numbers:", oddNumbersArray);
// 4.  Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateCircleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}
const radius = 5; // You can replace this with the desired radius value
const area = calculateCircleArea(radius);
console.log(`The area of a circle with radius ${radius} is: ${area}`);
// 5. Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function removeFailingGrades(grades) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}
const gradesList = [75, 30, 90, 42, 65, 55, 80]; // You can replace this with your own list of grades
const updatedGrades = removeFailingGrades(gradesList);
console.log("Updated grades:", updatedGrades);
// 6. Write a program that uses a function to find the largest element in an array of numbers.
function findLargestElement(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
const num = [10, 45, 23, 67, 89, 34, 56]; // You can replace this with your own array of numbers
const largestElement = findLargestElement(numberArray);
console.log(`The largest element in the array is: ${largestElement}`);
