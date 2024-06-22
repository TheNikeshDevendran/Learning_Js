//array
// array can contain different types of value in it
// resisable in nature
//indexing can be done
//shallow copy there share same reference when we modify them
let ar1=[1,-2,true,null,"nikesh"]
// console.log(ar1)
let ar2=[20,50,60,1,3]
// console.log(ar2)

// array methods

// push :add element at last

// pop :remove element from last

// unshift :add element at first place of an array that is zero index
        //    changes original array 

// shift :remove first element from array
        //    changes original arraay 

// includes :it check wether particular data is present or not

// reverse :it set the value in reverse order
            // it changes original array

//indexof :it will get index of an value 
        // if the passing value is not present then its outpur will be -1

// join : it makes array value into string by adding some some seprator to seprate the value
//        default seperator is comma(,) or we can give our seperator to this join function
         // does not  changes original array 

// slice : it work like a substring  in array do not modify original array
        //    slice(0,3) it will not include 3

//splice : it also work like substring 
        //    splice(0,3) it will not include 3
        //   it changes the original array 
let ar3=[2,5,6,7,5,8]
// ar3.push(8)
// ar3.pop()
// ar3.unshift(10)
// ar3.shift()
// console.log(ar3.includes('nikesh'))
// console.log(ar3.reverse())
// console.log(ar3.indexOf('NI'))
// console.log(ar3.join())
// console.log(ar3.join('/'))
// console.log(ar3.slice(0,3))
// console.log(ar3)
// console.log(ar3.splice(0,3))
// console.log(ar3)




