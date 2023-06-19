function isPalindrome(word) {
  const re = /[\W_]/g;
  const lowRegStr = word.toLowerCase().replace(re, '');
  //console.log(lowRegStr)
  const reverseStr = lowRegStr.split('').reverse().join('');
  //console.log(reverseStr) 
  return reverseStr === lowRegStr;
}

console.log(isPalindrome("ANA$"))

/* Rewrite the Problem in Your Own Words
Define a function isPalindrome, that returns true if the given string is a palindrome. Otherwise, return false.
*/ 

/*ALGORITHM
1. define the function;
2. set the string to lowercase, use the RegExp to remove unwanted characters from it and set it equal to a variable;
3. console log this to make sure its always lowercase & unwanted characters removed;
4. split, reverse and join the variable and set it equal to a different variable;
5. console log this to make sure it's working; 
6. compare the lowercase string to the reversed string;
7. return true or false;
8. erase console logs. 
*/

/* PSEUDOCODE
Define a function isPalindrome(word);
Set lowRegStr = word.toLowerCase().replace(re, '') 
Check it console.log(lowRegStr);
ReverseStr = split the lowRegStr apart by letter, reverse the letters, join them again;
Compare the lowRegStr and reverseStr === to each other and return true or false.
*/

/*
The function takes the string passed in the paramater, lowercases it, removes unwanted characters and stores it in lowRegStr.
It then takes the original word and separates it by each letter, reverses the order of the letters, and joins it again.
It stores this value in reverseStr. It finally compares the two variables using the strict equality operator. 
It will return true if they are equal to each other, and false otherwise. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("ana"));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", isPalindrome("carolina"));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;