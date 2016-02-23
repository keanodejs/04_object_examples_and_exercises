
function Car (brand, color) {
	var color = color;
	this.brand = brand;

	this.getColor = function () {
		return color;
	}
}


var car = new Car('BMW', 'red');
console.log(car.brand);
console.log(car.color);
console.log(car.getColor());














