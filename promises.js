const yt = new Promise(resolve =>{
  setTimeout(()=>{
    console.log('we got the videos')
    resolve({videos:[1, 2, 3, 4, 5]})
  }, 2000)
})

const fb = new Promise(resolve =>{
  setTimeout(()=>{
    console.log('we got the usermane')
    resolve({username:'yusuf'})
  }, 2000)
})



Promise.all([yt,fb])
.then(result => console.log(result))