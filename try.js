// function mummy (amount, distance,cb) {
//     console.log(amount)
//     setTimeout(distance , 2000)
//     setTimeout(cb, 2000)
// }



// function money(a,b) {
//     return a*b
// }

// function destination(home){
//     console.log(home)
// }

// function release(){
//     console.log("fucumean")
// }

// // mummy( money(12,18),destination,release)

// setTimeout(()=> mummy(money(12,20),()=> destination("I am home"),release),5000)


function loginUser(name, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('now we have the data')
            const object = {
                userName: name,
                userEmail: email,
                userPassword: password,
            } 
            resolve(object)
        }, 2000)
    });
    
}

function getUserVideos(email){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["video 1","video 2","video 3"])
        },2000)
    })
}

function videoDetails(title){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve('This is the title of the video')
        },2000)        
    });
}

// const user = loginUser(this.userName,
//      this.userEmail,
//      this.userPassword, 
//      (user)=>{
//     console.log(user);
//     getUserVideos(user.userEmail, (videos)=>{
//         console.log(videos);
//         videoDetails(user, (title)=>{
//             console.log(title)
//         })
//     })
// })


loginUser('Abc',"abc@123",1234)
.then(user => getUserVideos(user))
.then(videos => videoDetails(videos))
.then(title => console.log(title))




console.log('start')
console.log('finish')