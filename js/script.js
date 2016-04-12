for (var i = 1; i < 101; i++) {
   if (!(i % 3) && !(i % 5)) {
	   console.log("fizzbuzz");
	   document.write("<p>fizzbuzz</p>")
   }
   else if (!(i % 3)) {
	   console.log("fizz");
	   document.write("<p>fizz</p>");
   }
   else if (!(i % 5 )) {
	   console.log("buzz");
	   document.write("<p>buzz</p>");
   }
   else {
       console.log(i);
	   document.write("<p>"+ i +"</p>");
   }
}
