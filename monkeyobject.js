var Monkey = function(name, species, foodsEaten) {
	this.name = name,
	this.species = species,
	this.foodsEaten = foodsEaten,
};

Monkey.prototype.introduction = function() {
	console.log("Hi, I'm  " + this.name + ", I am a " + this.species + " and I eat " + this.foodsEaten)
}


var food = ["pizza", "chocolate", "burgers"];
var randomFood = food[Math.floor(Math.random()*food.length)];

Monkey.prototype.eatSomething = function(newFood) {
	 if (Monkey.foodsEaten === Monkey.foodsEaten) {
	 	console.log("This monkey already eats this food.")
	 } else (Monkey.foodsEaten === "null") {
	 	this.foodsEaten.push(randomFood)
	 }
};




var moe = new Monkey("moe", "big monkey", "null");
var gerry = new Monkey("gerry", "medium monkey", "m and ms");
var matt = new Monkey("matt", "little monkey", "bananas");

console.log(moe.introduction());
moe.eatSomething();



