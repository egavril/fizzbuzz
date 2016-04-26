// for (var i = 1; i < 101; i++) {
//   if (!(i % 3) && !(i % 5)) {
// 	  console.log("fizzbuzz");
// 	  document.write("<p>fizzbuzz</p>")
//   }
//   else if (!(i % 3)) {
// 	  console.log("fizz");
// 	  document.write("<p>fizz</p>");
//   }
//   else if (!(i % 5 )) {
// 	  console.log("buzz");
// 	  document.write("<p>buzz</p>");
//   }
//   else {
//     console.log(i);
// 	  document.write("<p>"+ i +"</p>");
//   }
// }

$(document).ready(function() {
  var fizzler = new FizzBuzz();
  fizzler.bigFunction();
});

FizzBuzz = function() {
  this.input = null;
}

FizzBuzz.prototype.bigFunction = function() {
  var isNaN = this.checkNumber();

  if (isNaN) {
    var answer = confirm("That is not a number goober!!");
    
    if (answer) {
      this.bigFunction();
    }
  } else {
    for (var i = 1; i < this.input; i++) { 
      if (!(i % 3) && !(i % 5)) { 
        console.log("fizzbuzz"); 
        document.write("<p>fizzbuzz</p>") 
      } else if (!(i % 3)) { 
        console.log("fizz"); 
        document.write("<p>fizz</p>"); 
      } else if (!(i % 5)) { 
        console.log("buzz"); 
        document.write("<p>buzz</p>"); 
      } else { 
        console.log(i); 
        document.write("<p>"+ i +"</p>"); 
      } 
    }
  }
}

FizzBuzz.prototype.checkNumber = function() {
  this.input = prompt("What is your number?").replace(/\D/g, '');
  return this.input.length ? false : true;
}