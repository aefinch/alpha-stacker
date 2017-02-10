// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
     var currentRow=alphabet[0];
     var rowNone=alphabet[0];
     for (i=1; i<alphabet.length; i++) {
     	console.log(currentRow);
     	// currentLength=currentRow.length;
     	if (rowNone.
     		   .length % 3 ===0) {
     		currentRow+=" "
     	}
     	currentRow+=alphabet[i];
     	rowNone+=alphabet[i];
     }

}

// Invoke the function and pass in the array
stackLetters(alphabet)