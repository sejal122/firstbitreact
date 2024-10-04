const express = require('express')
const mongoose=require('mongoose')
const cors = require('cors')
//cross-origin resource sharing
const app=express();
app.use(cors())
app.use(express.json())
const {MongoClient}=require('mongodb')
uri ="mongodb+srv://sejalmac:12vUFHjzTUwvSSB1@cluster0.h7joqyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const ObjectId=require('mongodb').ObjectId;
app.listen(8000,()=>{
    console.log("listning to port 8000")
})
app.get('/data',async(req,res)=>{
    const client=new MongoClient(uri)
    try{
        await client.connect();
        const db=client.db('Users')
        console.log("db",db)
        const userCollection= db.collection('users')
        const returneddata =await userCollection.find().toArray()
        res.send(returneddata)

    }finally{
        await client.close()
    }
})
let newdata={"user_id":"test2","hashed_password":null,"dob_day":12,"dob_month":1,"dob_year":1996,"gender_identity":"female","email":"xyz12@gmail.com","url":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615751072497-5f5169febe17%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%253D%253D&tbnid=u61zC0xCLTOo1M&vet=12ahUKEwj5jrX4rI6CAxXCWmwGHTrsB2kQMygTegUIARCOAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcute-dog&docid=ixRzgSBlQp2bbM&w=1000&h=1333&q=dog%20img&ved=2ahUKEwj5jrX4rI6CAxXCWmwGHTrsB2kQMygTegUIARCOAQ","about":"I am a lhasa apso!","matches":[{"user_id":"test5"}],"firstname":"gigi2","lastname":"Gujar2"}
app.get('/insertdata',(res,req)=>{
    const client=new MongoClient(uri)
    try{
        client.connect()
        const db=client.db('Users')
    
        const userCollection= db.collection('users')
        userCollection.insertMany([
            {item:"chair",qty:29},
            {item:"book",qty100}
        ])

        console.log(res)
    }
    finally{
        client.close()
        console.log(res)
       // res.send("something went wrong")
    }
})
app.get('/deleteone',(res,req)=>{
    const client=new MongoClient(uri)
    try{
        client.connect()
        const db=client.db('Users')
    
        const userCollection= db.collection('users')
        userCollection.deleteOne({_id:new ObjectId("665da011f413e6342ed1dbee")})

        console.log(res)
    }
    finally{
        client.close()
        console.log(res)
       // res.send("something went wrong")
    } 
})

app.get('/updateinfo',(res,req)=>{
    const client=new MongoClient(uri)
    try{
        client.connect()
        const db=client.db('Users')
    
        const userCollection= db.collection('users')
        userCollection.updateOne({"user_id":"test"},
        {
            $set:{"email":"updated@gmail.com"}
        })

        console.log(res)
    }
    finally{
        client.close()
        console.log(res)
       // res.send("something went wrong")
    } 
})
