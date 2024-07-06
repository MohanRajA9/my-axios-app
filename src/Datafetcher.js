import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => {
    //         setData(response.data);
    //         setLoading(false)
    //     })
    //     .catch(error=>{
    //         setError(error);
    //         setLoading(false);
    //     });
    // },[])
    // console.log(data)
    useEffect (()=>{
        const myDataFetcher = async () =>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(response.data)
                setLoading(false)
            }catch(error){
                setError(error)
                setLoading(false)
            }
        }
        myDataFetcher()
    },[])

    if(Loading)return<p>Loading...</p>;
    if(error)return <p>Error : {error.message}</p>;

return (
    <div>        
        <h5>DataFetcher</h5>
        <ul>
            {data.map(item=>{
               return <li key={item.id} >{item.title}</li>
            })}
        </ul>
    </div>
)
}

export default DataFetcher;