// The Object.create() method is used to create new objects 
// on the base of another existing object.
// We are using prototypes here and inheritance, 
// but we will not go deeper into that in this class
// A good tutorial and description of inheritance in javascript can be found at:
// https://github.com/sporto/planetproto


var machine = {
	make : 'BMW',
	model : 'i8' 
}

// then you, with this object as a base object, can create a new one:
var vihecle = Object.create(machine);

// and in vihecle you now have an empty object that have access to the machines properties 
console.log(vihecle);
console.log(vihecle.make);

// and you can add new properties to vihecle without changing machine
vihecle.color = 'Red';
console.log(vihecle); // Vihecle now has a color + machine properties
console.log(machine); // Machine still has no color

