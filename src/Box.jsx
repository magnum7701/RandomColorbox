import './boxstyle.css'
import Showsmallbox from './Smallbox'
import { useState } from 'react';
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const colors=["red", "blue", "green", "yellow", "orange", 
  "purple", "pink", "brown", "gray", 
  "white", "cyan", "magenta", "lime", "teal", 
  "indigo", "violet", "gold", "silver", "beige", 
  "maroon", "navy", "olive", "coral", "turquoise"]
const randcolor=()=>colors[Math.floor(Math.random() * colors.length)]

export default function Box(){
    const [colour,setColour] = useState("red")
    const changecolour=()=>{
        setColour(randcolor())
    }
    return(
        <div className="bigbox">
            {
                numbers.map((num) => (
                    <Showsmallbox number={num} bgColor={randcolor()} randcolor={randcolor} />
                    )
                )
               
            }
        </div>
    )
}
