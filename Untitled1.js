
const another = async () => {
    const response = await fetch('todos/todos.json');

    if(response.status !== 200){
       throw new Error ('Cannot locate data')
    }

    const data = await response.json();
    console.log(data)

    
}

another()
   .then(data => console.log('found the data', data))
   .catch(err => console.log(err))