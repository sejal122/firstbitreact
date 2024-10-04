import React, { createContext, useState } from 'react'

function Display(props) {
const [logiedin,setLogiedIn] =useState(false)
function makealert(score,e){
    alert("hey your score is"+score )
    console.log(e)
}
let content;
// if(logiedin){
//     content= `welcome user`
// }
// else{
//     content= `please login first!`
// }
// const useContext=createContext()

    return (
        
   <div>
            <button onClick={(e)=>makealert(props.score,e)}>click me</button>
            <h3>score = {props.score}</h3>
       {
        logiedin && "welcome user"
       }
        </div>
     
     
    )
}

export default Display

// const user=useContext(useContext)

//<h2> `hello  ${user} `!}