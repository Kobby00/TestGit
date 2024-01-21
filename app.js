//Async functions
console.log("Start")

function loginUser(email,password, callback) {
    setTimeout(()=>{
        console.log("Now we have the data");
        callback ({ userEmail: email,
                    password: password
        
        });
    }, 3000);
};

function getUserVideos(email,callback) {
    setTimeout(()=>{
        callback(["video1","video2", "video3"])
    },2000)
}

const user = loginUser("koo@goomail.com", 12345,(user)=>{
    console.log(user)
    getUserVideos(user, (videos)=>{
        console.log(videos)
    })
});

console.log('Finish')



