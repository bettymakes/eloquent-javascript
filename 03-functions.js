// Eloquent Javascript::03

/* ========================================================================
  Functions
======================================================================== */

/*
  MINIMUM
  The previous chapter introduced the standard function Math.min that returns 
  its smallest argument. We can do that ourselves now. Write a function min 
  that takes two arguments and returns their minimum.
*/

// min function takes in two arguments "a" and "b"
function min (a, b) {

  // If the first number is smaller than or equal to the second number,
  // then the first number is returned
  if(a <= b) {
    return a;

  // Otherwise, the second number must be smaller than the first, so return
  // the second number
  } else {
    return b;
  }
};


/* --------------------------------------------------------------------- */


/*
  RECURSION (Part 1)
  We’ve seen that % (the remainder operator) can be used to test whether a 
  number is even or odd by using % 2 to check whether it’s divisible by two. 
  Here’s another way to define whether a positive whole number is even or odd:
   
    - Zero is even.
    - One is odd.
    - For any other number N, its evenness is the same as N - 2.
  
  Define a recursive function isEven corresponding to this description. The 
  function should accept a number parameter and return a Boolean.
*/

// isEven function takes in one argument, "number"
function isEven(number) {

  // As stated in the question, since we're not using the modulus operator (%)
  // to check for evenness, we'll check for equality against 0 or 1 to determine
  // whether the number is even or odd. 
  if(number === 0) {

    // Since the number is equal to zero, we know it's even. Returning true.
     return true;
  } else if (number === 1) {

    // Since the number is equal to one, we know it's odd. Returning false.
    return false;
  }    

  // Subtracting 2 because as stated in the question, the evenness of a number
  // is the same as number - 2.
  number -= 2;

  // Defining a recursive function, it calls itself.
  // The idea here is to continuously subtract 2 from the number until it is
  // equal to either 0 or 1 to determine its evenness
  return isEven(number);
};


/*
  RECURSION (Part 2)
  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a 
  way to fix this?

  isEven(50); -> true
  isEven(75); -> false
  isEven(-1); -> RangeError: Maximum call stack size exceeded

  Derp! The "maximum call stack error" got called because isEven is a recursive 
  function. It kept calling itself and would continue to do so, infinitely,
  if it couldn't find a number that equals to 0 or 1.

  This was what was going on:
  isEven(-1) {
    if (number === 0) { return true; }          // -1 not equal to 0. Next!
    else if (number === 1) { return false; }    // -1 not equal to 1. Next!
    number -= 2                                 // number now equals to -3. (-1 - 2 = -3)
    return isEven(-3)                           // Calls isEven again -> isEven(-3)
  }

  isEven(-3) {
    if (number === 0) { return true; }          // -3 not equal to 0. Next!
    else if (number === 1) { return false; }    // -3 not equal to 1. Next!
    number -= 2                                 // number now equals to -5. (-3 - 2 = -5)
    return isEven(-5)                           // Calls isEven again -> isEven(-5)
  }

  isEven(-5) {
    if (number === 0) { return true; }          // -5 not equal to 0. Next!
    else if (number === 1) { return false; }    // -5 not equal to 1. Next!
    number -= 2                                 // number now equals to -7. (-5 - 2 = -7)
    return isEven(-7)                           // Calls isEven again -> isEven(-7)
  }

  And this would continue to go on and on and on. 
  Hence, "RangeError: Maximum call stack size exceeded".
  Let's fix it!
*/

function isEven(number) {
  
  // The first condition we check is whether the number is a negative number
  // a.k.a. smaller than 0. If it is, I get its absolute value.
  // The absolute value indicates how far away the number is from 0. That value
  // is always a positive number.

 /* --------------------------------------
  |    Absolute Value Example Diagram:    |
  |                                       |
  |    -5 -4 -3 -2 -1  0  1  2  3  4  5   |
  |    ________________________________   |
  |        ^ - - - - - ^                  |
  |            |-4|                       |
  |       Absolute Value of -4 is 4.      |
   -------------------------------------- */

  if(number < 0) {
    number = Math.abs(number);
  } 

  // Now that the number is positive, we can continue to check whether the
  // number is equal to 0.
  // Also worth noting: the first if statement isn't chained with the if/else
  // statements below. That's because if isEven(-1) was called, it would meet
  // the conditions of the first if statement (number < 0). Should the first 
  // if statement be chained with the if/else statements below, then once one
  // condition is met, the other if/else statements are skipped over. We'll
  // end up running into the RangeError issue again because the (number === 1)
  // condition will always be skipped over.
  if(number === 0) {
     return true;

  // Checking if it's equal to 1
  } else if (number === 1) {
    return false;
  }    
  
  // The number is not equal to 0 or 1. Subtract 2 and continue on.
  number -= 2;
  return isEven(number);
};


/* --------------------------------------------------------------------- */


/*
  BEAN COUNTING (Part 1)
  You can get the Nth character, or letter, from a string by writing 
  "string".charAt(N), similar to how you get its length with "s".length. The 
  returned value will be a string containing only one character (for example, "b"). 
  The first character has position zero, which causes the last one to be found 
  at position string.length - 1. In other words, a two-character string has 
  length 2, and its characters have positions 0 and 1.

  Write a function countBs that takes a string as its only argument and returns 
  a number that indicates how many uppercase “B” characters are in the string.
*/  

// countBs function takes one argument, "string"
function countBs(string) {

  // Initializing matchedBs variable and starting the count at 0
  var matchedBs = 0;
  
  // Looping through the string passed into the function
  for (var i=0; i < string.length; i++) {

    // We can access characters in a string similar to an array. 
    // If the current character being checked in the string matches a capital B,
    // then we'll increase the matchedBs by 1.
    if (string[i] === "B") {
      matchedBs++
    }
  }
  
  // Once the entire string has been looped through, we can return the result
  // to the user.
  return matchedBs;
}



/*
  BEAN COUNTING (Part 2)
  Next, write a function called countChar that behaves like countBs, except 
  it takes a second argument that indicates the character that is to be counted 
  (rather than counting only uppercase “B” characters). Rewrite countBs to 
  make use of this new function.
*/  

// countChar function takes in two arguments, "string" and "char" (short for characters)
function countChar(string, char) {

  // Initializing matchedChars variable and starting the count at 0
  var matchedChars = 0;
  
  // Looping through the string passed into the function
  for (var i=0; i < string.length; i++) {

    // Instead of matching against a specified character ex. "B", we can now 
    // accept any character as an argument and can match against that
    if (string[i] === char) {
      matchedChars++
    }
  }
  return matchedChars;
}


/*
  BEAN COUNTING (Part 3)
  Rewrite countBs to make use of this new function.
*/  

function countBs(string) {
  return countChar(string, "B");
}





