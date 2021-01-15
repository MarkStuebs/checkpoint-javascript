// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:
var foods = [ "toast", "jam", "butter" ];
console.log(foods);

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:
var last = foods[foods.length - 1];
console.log(last);


// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:
var favoriteFoods = [];
console.log(favoriteFoods);



// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:
for ( var i = 0 ; i < foods.length ; i++ ) {
    favoriteFoods[i] = foods[i]
    //Peter used an elengant approach favoriteFoods.push(food[i])
}
console.log(favoriteFoods);


// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:
var instructor = new Object();

instructor.first = 'a';
instructor.second = 'b';
instructor.third = 'c';

console.log(instructor);
//Peter created using var instructor { added three key:value pairs }

// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:

//var has-office-hours = false;

// Peter acknowledged this si a  hard one.
// instructor.newTown = "Torrance";
// console.log(instructor)
// use bracket notation allows you to easily add a string

instructor['has-office-hours'] = true
console.log(instructor);