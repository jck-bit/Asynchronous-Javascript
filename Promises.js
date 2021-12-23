const getTodos = (resorce) =>{

    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
        
          if( request.readyState ===4 &&request.status ===200){
            const data = JSON.parse(request.responseText)
            resolve(data);
        
          } else if(request.readyState === 4){
             reject('error getting results')
          }
        })
        
        request.open('GET',resorce)
        request.send();
        
    });



};

getTodos('todos/todos.json').then(data=>{
   console.log('promise resolved',data)
}).catch(err=>{
   console.log('promise rejected ,', err)
})
//Promise example


// const getsth =() =>{

//     return new Promise ((resolve, reject)=>{
//         reject('some error')
//         // resolve('some data')
//     });
// };


// // getsth().then((data)=>{
// //   console.log(data)
// // }, (err)=>{
// //    console.log(err);
// // });


// getsth().then(data=>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err)
// })