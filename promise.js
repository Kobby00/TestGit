function life(){
    return new Promise((resolve, reject) => {
        resolve("baby")
        console.log('This is the first function')
    })
}

function newBaby(age){
    return new Promise((resolve, reject) => {
        resolve('baby')
        console.log('This is the second function')
    })
}

function midAge(teen){
    return new Promise((resolve, reject) => {
        resolve('15,16,17')
        console.log('This is the third function')
    })
}

function youth(adult){
    return  new Promise((resolve, reject) => {
        resolve('yungin')
        console.log('This is the fourth function')
    })
}

function old(retire){
    return  new Promise((resolve, reject) => {
        resolve('Done')
        console.log('This is the fifth function')
    })
}
function death(hell){
    return  new Promise((resolve, reject) => {
        resolve('Dead and Gone')
        console.log('This is the sixth function')
    })
}

function onMiscurage(nolife){
    return new Promise((resolve, reject) => {
        reject('The baby died in your womb')
        console.log('This is the last function')
    })
}




function onSuccess(data){
    console.log(`Success: ${data}`)
}

function onFailure(error){
    console.log(`Failure: ${error} `)
} 

life()
.then(newBaby)
.then(midAge)
.then(youth)
.then(old)
.then(death)
.then(onSuccess)
.catch(onFailure)