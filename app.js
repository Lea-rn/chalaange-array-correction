///// flat

// const arr = [[1,2,3],[4,5,6,[10,11,[100,200]]],[7,8,9]]  //// [1,2,3,4,5,6,7,8,9]

// console.log(arr.flat(3))  ; 


// const accounts = [
//     { id: 1, name: 'John', email: 'john@example.com', movements : [100,200,300,500] },
//     { id: 1, name: 'steven', email: 'steven@example.com', movements : [800,700,3000,50] },
//     { id: 1, name: 'peter', email: 'peter@example.com', movements : [1000,20,600,-500] },

// ]


////// [100,200,300,500,800,700,3000......]
// const sumOfMovements= accounts.map((acc)=> acc.movements).flat().reduce((acc,mov)=>acc+mov , 0) ; 


// console.log(sumOfMovements)  //// 6770

////// flatmap :: 

// const sumOfMovements2 = accounts.flatMap((acc)=>acc.movements).reduce((acc,mov)=>acc+mov , 0)
// console.log(sumOfMovements2) 

////// challange correction :: 

const dogs = [{
    weight: 22,
    curFood: 250,
    owners: ["alice", "bob"]

}, {
    weight: 8,
    curFood: 200,
    owners: ["matilda"]

}, {
    weight: 13,
    curFood: 275,
    owners: ["sarah", "john"]

}, {
    weight: 32,
    curFood: 340,
    owners: ["michael"]

}

]
////1
dogs.forEach((dog)=>{
return dog.recFood = Math.trunc(dog.weight**0.75 *28)  })

console.log("array of dogs after adding new key recFood" , dogs) 


////2 

const sarahDogs = dogs.find((ele)=>ele.owners.includes("sarah"))

console.log(sarahDogs)

console.log(`sarah's dog is eating too ${sarahDogs.curFood>sarahDogs.recFood ? "much" : "little"}`)

////3
const ownersDogEatToMuch = dogs.filter((ele)=>ele.curFood > ele.recFood).flatMap((ele)=>ele.owners)
 


console.log(ownersDogEatToMuch)
const ownersDogEatTolittle = dogs.filter((ele)=>ele.curFood < ele.recFood).flatMap((ele)=>ele.owners)
 


console.log(ownersDogEatTolittle)

///4

console.log(`${ownersDogEatToMuch.join(" and ")} eat too much`)

console.log(`${ownersDogEatTolittle.join(" and ")} eat too little`)




/// 5 

console.log("quest 5 : ",dogs.some((ele)=>ele.curFood === ele.recFood))

//// 6 
const checkEating = (ele)=>ele.curFood > (ele.recFood * 0.9) && ele.curFood < ele.recFood*1.1
console.log("quest6 :" ,dogs.some(checkEating))

//// 7
const checkEatingOk = dogs.filter(checkEating)
console.log("quest7 : ",checkEatingOk)

///8
const dogSorted = dogs.slice().sort((a,b)=>a.recFood-b.recFood) ; 
console.log("quest8 : ",dogSorted)















// revesion for every and some methode :: 
// const numbers = [1,2,10,20,30]
// // console.log(numbers.includes(30))

// const result = numbers.some((ele)=>ele > 30)
// console.log(result)

// const x = numbers.every((ele)=>ele>=1)
// console.log(x)