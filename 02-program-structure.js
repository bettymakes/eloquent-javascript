// Eloquent Javascript::02

/* ========================================================================
  Program Structure
======================================================================== */

/*
  LOOPING A TRIANGLE
  Write a loop that makes seven calls to console.log to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/


// Initializing ouput variable as one single hash. 
var output = "#";

// Because the triangle has 7 levels, we'll loop through 7 times.
for (var i = 0; i < 7; i++) {  

  // Prints the ouput 
  console.log(output);

  // Adds an additional hash to the string of hashes
  output += "#";
}


/* --------------------------------------------------------------------- */


/* 
  FIZZBUZZ (Part 1)

  Write a program that uses console.log to print all the numbers from 1 to 100, 
  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
  number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

// Loop starts at 1 (var i = 1) and iterates through the loop 100 times 
for (var i = 1; i < 101; i ++) {

  // First condition checks if i is divisible by 3
  if (i % 3 === 0) {
    console.log("Fizz");

  // Second condition checks if i is divisible by 5 (and not 3)
  // Ex. If the number is 15 (divisible by both 3 & 5), 15 will print "Fizz"
  // because 15 meets the requirements of the first if statement (if divisible by 3) 
  } else if (i % 5 === 0) {
    console.log("Buzz");

  // If number is neither divisible by 3 or 5, we'll just print the number
  } else {
    console.log(i);
  }  
}


/* 
  FIZZBUZZ (Part 2)

  When you have that working, modify your program to print "FizzBuzz", for 
  numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
  for numbers divisible by only one of those).
*/

// The "straightforward" solution
for (var i = 1; i < 101; i ++) {

  // Order matters here.
  // As seen in part 1, any number that is divisible by both 3 and 5 is caught
  // by the first if statement. Knowing this, we must check for numbers that
  // are divisble by both 3 and 5 in the first if statement before we continue
  // to check whether they are divisible by 3 OR 5. 
  if ( (i % 3 === 0) && (i % 5 === 0) ) {
    console.log("FizzBuzz"); 
  } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }  
}


// The "clever" solution
for (var i = 1; i < 101; i ++) {

  // Create a variable to store the result of the word that you'll be printing out
  // in this iteration
  var result = "";

  // If divisible by 3, result variable will store the string "Fizz"
  if (i % 3 === 0) {
    result += "Fizz"
  }

  // If divisible by 5, result variable will store the string "Buzz"
  // Note that any numbers divisible by 3 and 5 will still print out "FizzBuzz"
  // because "result" would've stored "Fizz" from the first if statement
  // and now "Buzz" will be concatenated with "Fizz" from before.
  if (i % 5 === 0) {
    result += "Buzz"
  }

  // The OR operator will print the first statement that evaluates to a "truthy" 
  // statement. Initially, it will check if "result" is truthy. If the number was
  // neither divisible by 3 nor 5, then result would have remained an empty
  // string. Empty strings are considered "falsey".
  // If the variable result is falsey, then it will fall back to printing 
  // i (the number) because i always evalutes to a truthy statement. Why? 
  // Because i is our iterator. It's storing a number value at all times.
  // If the variable result is truthy, then it will print out the string that 
  // it's storing.
  console.log( result || i);
}


/* --------------------------------------------------------------------- */


/* 
  CHESS BOARD (Part 1)
  Write a program that creates a string that represents an 8×8 grid, using 
  newline characters to separate lines. At each position of the grid there is 
  either a space or a “#” character. The characters should form a chess board.
  
  Passing this string to console.log should show something like this:

   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
*/

// Initializing the variable that will hold the entire board's string
var board = "";

// Loops over rows
for ( var row = 0; row < 8; row++ ) {

  // Determines whether the row is even or odd and sets the first character
  // in that row's line
  if ( row % 2 === 0 ) {
    board += "@"
  } else {
    board += " "
  }

  // Loops over each column in the row
  // Because the first tile of each line is populated in the "row loop" above,
  // the columns will need to only fill in one 7 tiles instead of 8.
  // (7 is one less than 8) 
  for ( var column = 0; column < 7; column++ ) {

    // Looks at the last character in the board and adds the opposite character
    var lastCharacter = board[board.length-1];
    if(lastCharacter === "@") {
      board += " ";
    } else {
      board += "@";
    }
  }

  // End of the row. Creating a new row for the board.
  board += "\n";
}
console.log(board);


/* --------------------------------------------------------------------- */

/* 
  CHESS BOARD (Part 2)
  When you have a program that generates this pattern, define a variable 
  size = 8 and change the program so that it works for any size, outputting 
  a grid of the given width and height.
*/

// Replacing anywhere you see "8" with the variable size
var size = 8,
    board = "";

for ( var row = 0; row < size; row ++ ) {
  if ( row % 2 === 0 ) {
    board += "@"
  } else {
    board += "-"
  }

  for ( var column = 0; column < size-1; column++ ) {
        var lastCharacter = board[board.length-1];
    if(lastCharacter === "@") {
      board += "-";
    } else {
      board += "@";
    }
  }
  board += "\n";
}
console.log(board);


/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */


/*
 CHESS BOARD REVISION:
 I came back to look at this solution a little later and realized I wasn't taking
 advantage of the row & column counters. The sum of the row & column iterators
 would allow me to know whether or not the checker should be represented by a
 hash or a space (depending on whether it was even or odd).


This board shows the sum of the column & row iterators
       Column
      #0    #1    #2    #3    #4
 Row
 #0    0  |  1  |  2  |  3  |  4  
      --- + --- + --- + --- + ---
 #1    1  |  2  |  3  |  4  |  5      
      --- + --- + --- + --- + ---
 #2    2  |  3  |  4  |  5  |  6
      --- + --- + --- + --- + ---
 #3    3  |  4  |  5  |  6  |  7
      --- + --- + --- + --- + ---
 #4    4  |  5  |  6  |  7  |  8 



Now, I'm identifying the sums of the iterators by whether they are even or odd.
E = Even
O = Odd
       Column
      #0    #1    #2    #3    #4
 Row
 #0    E  |  O  |  E  |  O  |  E  
      --- + --- + --- + --- + ---
 #1    O  |  E  |  O  |  E  |  O      
      --- + --- + --- + --- + ---
 #2    E  |  O  |  E  |  O  |  E
      --- + --- + --- + --- + ---
 #3    O  |  E  |  O  |  E  |  O
      --- + --- + --- + --- + ---
 #4    E  |  O  |  E  |  O  |  E 


Finally, replacing the E's and O's by their hashtag or space equivalent
       Column
      #0    #1    #2    #3    #4
 Row
 #0       |  #  |     |  #  |     
      --- + --- + --- + --- + ---
 #1    #  |     |  #  |     |  #      
      --- + --- + --- + --- + ---
 #2       |  #  |     |  #  |   
      --- + --- + --- + --- + ---
 #3    #  |     |  #  |     |  #
      --- + --- + --- + --- + ---
 #4       |  #  |     |  #  |    


Sweet! That make sense right? Let's try to write the code for this.
*/

var board = "";

// Loop through the rows
for (var row = 0; row < 8; row ++) {
  // Loop through the columns
  for (var column = 0; column < 8; column ++) {
    // Getting the sum of the row# and column#
    var sum = row + column;

    // Checking to see if the sum is even or odd
    if(sum % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);


//REVISION PART 2:
var board = "",
    size = 8;

for (var row = 0; row < size; row ++) {
  for (var column = 0; column < size; column ++) {
    var sum = row + column;

    if(sum % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);







