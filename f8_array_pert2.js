let marvel=['spidy','thor','hulk']
let dc=['superman','batman','wonder']

//when we push dc-array in marvel-array it directly pushes the dc array in it
// [ 'spidy', 'thor', 'hulk', [ 'superman', 'batman', 'wonder' ] ]

// marvel.push(dc)

// when we use concat it will not save result in these way it make it as
// new array and do not change the existing array
// [ 'spidy', 'thor', 'hulk', 'superman', 'batman', 'wonder' ]

let allHeros=marvel.concat(dc)
console.log(allHeros)


// Spread funciton we use [...arrayname,...arrayname]
// spread fucniton also work like concat but in concat we can pass 
// only one array but it spread(...) operator not limit to pass array
// but the result is same as concat
// [ 'spidy', 'thor', 'hulk', 'superman', 'batman', 'wonder' ]

let Seprated_Array=[...marvel,...dc]
// console.log(Seprated_Array)

// in this scenario sepeartor methos will not work
// so we can use flat(specify depth)  method
//in this array the depth is 3 the depth is calculated by how many internal sub arrya are present

let dum=[1,2,3,true,[4,5,6],null,[7,8,[9,10]]]
let dum1=[...dum]
let flated_array=dum.flat(1)//or on depth we can specify Infinity
// its typeof is object
// console.log(flated_array)

let num=[2,3,4,5]
console.log(Array.isArray(num))
// Array.isArray(num) is a method use to check its an array

let a=10,b=20,c=30
let d=Array.of(a,b,c)
console.log(d)
// Array.of(a,b,c) is a method to make seperate element
// into single array