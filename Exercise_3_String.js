let turtle1 = 'Leonardo';
let turtle2 = 'Raphael';
let turtle3 = 'Donatello';
let turtle4 = 'Michelangelo';

let allTurtles = '';


// console.log (allTurtles+=turtle1);
allTurtles += turtle1;

console.log(allTurtles);

allTurtles  +=' ' +turtle2+","+turtle3+","+turtle4;

console.log(allTurtles);

console.log(allTurtles.indexOf(turtle3));

console.log(allTurtles.length);

let firstHalfTurtles = allTurtles.slice(0,16);
let secondHalfTurtles = allTurtles.slice(17,39);

console.log(firstHalfTurtles);
console.log(secondHalfTurtles);

console.log("My favorites are "+turtle2+" and "+turtle3);
console.log("My least favorites pair are "+secondHalfTurtles);










