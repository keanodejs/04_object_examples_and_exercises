var x = 10;


// object
var obj = {
	name : 'Claus', 
	info : function () {
		return x;
	}
}

console.log(obj.name);
console.log(obj.info());


// function
var fun = function(){
	var name = 'Claus';
	var age = 22;

	console.log(age);
} 

fun();
