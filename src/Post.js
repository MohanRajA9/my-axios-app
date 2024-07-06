import React, { useEffect } from 'react';
import axios from 'axios';

function Post() {

    // useEffect(() => {
    //     axios.post('https://jsonplaceholder.typicode.com/posts', {
    //         title: "fo",
    //         body: "bar",
    //         userid: 1
    //     })
    //         .then(response => console.log(response.data))
    //         .catch(error => console.error("there was an error", error))
    // }, [])
    useEffect(() => {
        const myPost = async () => {
            try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                            title: "fo",
                            body: "bar",
                            userid: 1
                })
                console.log(response.data)

            } catch (error) {
                console.error("there was an error",error)
             }
        }
        myPost()
    }, [])
    return (
        <div>Posted</div>
    )
}
export default Post;