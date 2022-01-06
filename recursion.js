/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  if(i === words.length) return longestWord;

  longestWord = Math.max(words[i].length, longestWord)
  return longest(words, i+1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr='') {
  if(i >= str.length) return newStr;

  newStr += str[i];
  return everyOther(str, i+2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0, newStr='') {
  let left = i;
  let right = str.length - i - 1;
  if (left>= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i > arr.length) return - 1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length - 1, newStr='') {
  if(str.length === newStr.length) return newStr;
  newStr += str[i];
  return revString(str, i-1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if(left > right) return -1;

  let mid = Math.floor((right + left) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
