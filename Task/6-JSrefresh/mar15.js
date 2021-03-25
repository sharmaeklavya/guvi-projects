// ---1----Printing Odd Numbers ------
console.log("Solution 1 - Odd Numbers");
// Array
let arr = [2, 4, 5, 6, 1, 13, 0, 45, 7, 9, 87, 34, 17];

// ------- Solution One ------------
// Variable for storing Oddnum
// IIFE Function
let oddNum = [];
(function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNum.push(arr[i]);
    }
  }
})();
//Printing Odd Numers
console.log(oddNum);

// ----- Solution Two --------------
// high order function method
let oddNumber = arr.filter((e) => e % 2 === 1);
//Printing Odd Numers
console.log(oddNumber);

// ---2----First Letter Capital - Title Caps------
console.log("Solution 2 - First letter - capital");

// String Array
let str = ["delhi", "chennai", "chandigarh", "bengluru"];
// Normal Function
function titleCaps(arr) {
  let newStr = [];
  for (let i = 0; i < arr.length; i++) {
    // extract first letter and changed it into UpperCase
    // and added it the rest of the letters
    let inCaps = arr[i].split("")[0].toUpperCase() + arr[i].slice(1);
    // pushed the result in a new array
    newStr.push(inCaps);
  }
  return newStr;
}
//Invoking function // Printing output
console.log(titleCaps(str));

// ---3----Printing sum of numbers ------
console.log("Solution 3 - Sum of numbers");

// Shall use the task 1 array

// ----- Solution One --------------
// IIFE function
let sum = (function () {
  let result = 0;
  for (let i in arr) {
    result += arr[i];
  }
  return result;
})();
console.log(sum);

// ----- Solution Two --------------
let sumOfNum = arr.reduce((acc, val) => acc + val);
//printing output
console.log(sumOfNum);

// ---4----Printing prime numbers ------
console.log("Solution 4 - Prime Numbers");

function prime(num) {
  let isPrime = [];
  for (let i = 0; i < num.length; i++) {
    let count = 0;
    if (num[i] > 2) {
      for (let j = 2; j < num[i] - 1; j++) {
        if (num[i] % j == 0) {
          count += 1;
        }
      }
      if (count === 0) {
        isPrime.push(num[i]);
      }
    }
  }
  return isPrime;
}
// invoking and storing the function in a variable
let primeNum = prime(arr);
//printing the output
console.log(primeNum);

// ---5----Return palindromes ------
console.log("Solution 5 - Palindromes string");

// new string array
let palinArr = ["solos", "tokyo", "berlin", "denver", "madam", "refer"];
//function to return only palindrome string
function getPalindrome(str) {
  // loopin through the array
  for (let i = 0; i < str.length; i++) {
    //spliting string array into letters
    let splitStr = str[i].split("");
    // reversing the splitted letters
    let reverseStr = str[i].split("").reverse();
    // checking to see if they are Palindromes
    if (splitStr.join("") === reverseStr.join("")) {
      // returning only palindrome string
      console.log(str[i]);
    }
  }
}
//Invoking the function
getPalindrome(palinArr);

// ---6----Return median of two sorted arrays ------
console.log("Solution 6 - Median of two same size sorted arrays");

let array1 = [1, 12, 15, 26, 38];
let array2 = [2, 13, 17, 30, 45];

const findMedianSortedArrays = (nums1, nums2) => {
  let arr = [];
  let totalLen = nums1.length + nums2.length;

  if (totalLen == 1) {
    return nums1.length == 1 ? nums1[0] : nums2[0];
  }

  let arr_len = totalLen % 2 == 0 ? totalLen / 2 + 1 : Math.ceil(totalLen / 2);

  let i = 0;
  let j = 0;

  while (arr.length < arr_len) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        arr.push(nums1[i]);
        i++;
      } else {
        arr.push(nums2[j]);
        j++;
      }
    } else if (i >= nums1.length) {
      arr.push(nums2[j]);
      j++;
    } else {
      arr.push(nums1[i]);
      i++;
    }
  }

  return totalLen % 2 == 0
    ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2
    : arr[arr.length - 1];
};

console.log(findMedianSortedArrays(array1, array2));

// ---7----Remove duplicates from an array --------
console.log("Solution 7 - Removing duplicates from an array");

// new array with duplicate values
let duplicateArr = [1, 2, 2, 3, 5, 5, 76, 10, 4, 5, 2, 89, 8, 10, 12, 20];

// ----- Solution One --------------
// using filter method
let removeDuplicates = duplicateArr.filter(
  (e, i) => duplicateArr.indexOf(e) === i
);
// printing output
console.log(removeDuplicates);

// ----- Solution TWO  --------------
// IIFE
let unique = (function (arr) {
  let uniqueVal = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueVal.indexOf(arr[i]) < 0) {
      uniqueVal.push(arr[i]);
    }
  }
  return uniqueVal;
})(duplicateArr);
// Printing result to console
console.log(unique);

// ---8----Rotate array by k--------
console.log("Solution 8 - Rotated array by k");

let rotateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// ----- Solution ONE  --------------
// Anonymous function
let rotating = function (arr, times) {
  // using slice method
  let arr1 = arr.slice(0, times);
  let arr2 = arr.slice(times);
  // pushing arr1 into arr2
  // used spread operator to extract only values
  // and not the array []
  arr2.push(...arr1);
  return arr2;
};
console.log(rotating(rotateArr, 5));

// ----- Solution TWO  --------------
function rotate(arr, times) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < times) {
      // beware, this will alter the
      // original array
      arr1.push(arr.shift());
    }
  }
  arr.push(...arr1);
  console.log(arr);
}
rotate(rotateArr, 7);
