//the following are variable

var name ="Allen";
var age ="4 years old";
var color ="gray";

var x = 10;
console.log(x + 30);


//alert
alert("Welcome!");



//different data types
"Hello World" //string
2,3,4,-4,-74 //numbers
true, false //boolean



//arrays- used to hold a collection of date

["blue", "red","green","yellow" ]; //full of strings

[1,2,3,100,837,"kitty"]; //can hold multiple data types

 var sizes=["small", "medium", "large"]; //arrays can be stored in variables



 //multi-dimensional arrays
 var birds=["pidgeon", "parrots"];
 var reptiles=["snakes", "lizards"];
 var animals = [birds, reptiles];

 //access items nested in multi-dimensional arrays
 var animals = [["pidgeons","parrots",],["snakes","lizards"]];
 //access the first array inside then the first item inside that array
 console.log(animals[0][0]);
//access the second array inside then the first item inside that array
console.log(animals[1][0]);




//logic = the control flow of the program


//any TESTS returns a boolean true or false
if (100 < 10){
	console.log("Impossible!");
}

if (100 > 10){
	console.log("This is a true statement")
}

//else statement runs only if the statement in the if statement is false

if(100===10){
	console.log("This is false");
}
else{
	console.log("this is true");
}


/*if you want to run another test before getting to the else statement
you will want to use else if*/

if (10 ===100){
	console.log("this will never happen");
}
else if (10===10){
	console.log("this is true, so this will show up in the console");
}
else{
	console.log("We wont get here because our else if statement is true");
}



//functions
function theSum(No1,No2 ){
	return ((No1+No2)*10);
}

console.log(theSum(2,3));

//alert function
function alertAge(SomeonesAge){
	return alert(SomeonesAge);
}

alertAge("27 years old");