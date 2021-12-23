const getTodos = (resorce, callback) =>{
  const request = new XMLHttpRequest();
request.addEventListener('readystatechange', ()=>{

  if( request.readyState ===4 &&request.status ===200){
    const data = JSON.parse(request.responseText)
    callback(undefined, data);

  } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
  }
})

request.open('GET',resorce)
request.send();
};

getTodos('./todos/todos.json', (err, data)=>{
 console.log(data)
 getTodos('/todos/marios.json', (err, data) =>{
   console.log(data)
 });
});

