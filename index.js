//console.log("Hello World");  

// const square = {
// 	area : (a) =>(a*a),
// 	perimeter : (a) => (4*a)
// }


const square = require('./square.js');

const calsquare = (a) =>{
	console.log(`The Value of a is ${a} and the area is` + square.area(a));
	console.log(`The Value of a is ${a} and the perimeter is` + square.perimeter(a));
}

console.log(__filename);
console.log(__dirname);

calsquare(5);