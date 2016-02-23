var animal = {
	name : 'Claus', 
	color : 'red',
	getName : function(){
		return this.name;
	}

};

console.log(animal.getName());
animal.name = 'Peter';
animal.name['Marcus'];
console.log(animal.name);