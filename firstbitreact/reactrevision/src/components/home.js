import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
function Home() {
    const [userData,setUserData]=useState([]);
    const [newData,setNewData]=useState();
    let newd={
        "id": 25,
        "name": "20 - Ervin new25 Howell",
        "username": "Antonette20",
        "email": "Shanna@melissa20.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125 - 20",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist20",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }

    

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUserData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const addnewdata=(name,email)=>{
        axios.post("https://jsonplaceholder.typicode.com/users",newd)
        .then((resp)=>{console.log(resp);setUserData([...userData,resp.data]);setNewData(resp.data)})
        console.log(userData)
    }
   const deletedata =(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        //setUserData(response.data)
        console.log(id)
        console.log("deleted data")
        console.log(response.data)
        //setUserData()
    })

 
   }
    return (
        <div>
            <h1>Home</h1>


            {userData.map((user)=>{
                return <ul key={user.id}>
                   <Link  to={`/details/${user.id}`}>
                    
                    <Card style={{width:"15rem",border:'1px solid grey'}}>
                        <Card.Body>
                            <Card.Title>
                                {user.name}
                            </Card.Title>
                            <Card.Subtitle>
                                {user.username}
                            </Card.Subtitle>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                        </Card.Body>


                    </Card>
                    
                    
                    </Link> 
                   <button onClick={()=>deletedata(user.id)}>delete</button>
                </ul>
            })}
        <button onClick={addnewdata}>addnewdata</button>
        </div>
    )
}

export default Home
