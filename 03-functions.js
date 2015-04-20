// Eloquent Javascript::03

/* ========================================================================
  Functions
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







