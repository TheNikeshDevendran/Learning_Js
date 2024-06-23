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
console.log(Seprated_Array)
