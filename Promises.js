const getTodos = (resorce) =>{


   return new Promise ((resolve, reject)=>{
      const request = new XMLHttpRequest();
 
       request.addEventListener('readystatechange', () =>{
 
       if(request.readyState ===4 && request.status ===200 ){
         const data = JSON.parse(request.responseText)
         resolve(data)
       }else if(request.readyState === 4){
         reject('error getting resources')
       }
   })
   
   request.open('GET', resorce);
   request.send();  
   })
 };

 getTodos('todos/todos.json').then(data =>{
   console.log('promise resolved', data)
 }).catch((err) =>{
    console.log('promise rejected:', err)
 });

