import React, { useEffect } from 'react';
import axios from 'axios';

function Put() {

    // useEffect(() => {
    //     axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    //         title: 'fo',
    //         body: 'bar',
    //         userid: 1,
    //         id: 1
    //     })
    //         .then(response => {
    //             console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.error("There was a problem with Put method", error)
    //         })
    // },)
    const ToPut = async () => {
        try{
            const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1',{
                title: 'fo',
                body: 'bar',
                userid: 1,
                id: 1
            })
            console.log(response.data)
        }catch(error){
            console.error("There was an error",error)
        }
    } 
    useEffect(()=>{
        ToPut()
    },[])
    return (
        <div>Put</div>
    )
}

export default Put;