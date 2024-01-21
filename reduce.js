const items = {
    item1: { name: 'car' , price: 20},
    item2: { name: 'house' , price: 30},
    item3 :{ name: 'plane' , price: 40},
}   



const keys = Object.keys(items)
const values = Object.values(items)
const entries = Object.entries(items)

console.log(keys)
console.log(values)
console.log(entries)

// const reduce = items.reduce((acc,e)=>{
//    const amount = e.price
//    if (acc[amount] == undefined) acc[amount] = []
//    acc[amount].push(e)
//    return acc
// },{})

// console.log(reduce)

