import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Details() {
    const [userData,setUserData]=useState([]);
    const { id } = useParams();
    let url =`https://jsonplaceholder.typicode.com/users/${id}`
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(res.ok){
                console.log(res)
                return res;
            }else{
                console.log("error")
            }
          
            
        }).then((data)=>{
            
            console.log(data.json().then(res=>setUserData(res)))
            console.log(userData)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <h1>Details</h1>
            <h3>{userData.name}</h3>
            <p>{userData.username}</p>
            <p>{userData.email}</p>
        </div>
    )
}

export default Details
