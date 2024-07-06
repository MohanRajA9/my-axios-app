import React, {useEffect} from 'react';
import axios from 'axios';

function Delete() {
// useEffect(()=>{
//     axios.delete('https://jsonplaceholder.typicode.com/posts/3')
//     .then(response=>{
//         console.log(response.data)
//     })
//     .catch(error=>{
//         console.error("There was an error",error)
//     })
// })
useEffect(()=>{
    const ToDelete = async () => {
        try{
            const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/3")
            console.log(response.data)
        }catch(error){
            console.error("there was an error",error)
        }
    }
    ToDelete()
},[])
    return(
        <div>Delete</div>
    )
}

export default Delete;