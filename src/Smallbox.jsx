import './boxstyle.css'
import { useState } from 'react'

export default function Showsmallbox({number,bgColor,randcolor}){
    const[currColor,setColor] = useState(bgColor)
    const handlecolor=()=>{setColor(randcolor)}
    return(
        <div style={{backgroundColor:currColor}}
        className="smallbox" onClick={handlecolor} >{number}</div>
    )
}