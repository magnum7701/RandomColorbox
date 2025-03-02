import './boxstyle.css'
import Showsmallbox from './Smallbox'
import { useState } from 'react';
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const colors=['Red','Blue','Green','Yellow','Pink','Purple','Cyan','Magenda','Orange','Violet']
// const randomcolor=()=>{"#" + Math.floor(Math.random() * 16777215).toString(16)}
const [colour,setColour] = useState("red")
const randcolor=()=>colors[Math.floor(Math.random() * colors.length)]
const changecolour=()=>{
    setColour(randcolor())
}
export default function Box(){
    return(
        <div className="bigbox">
            {
                numbers.map((num) => (
                    <Showsmallbox onClick = {changecolour} number={num} bgColor={randcolor()}/>
                    )
                )
               
            }
        </div>
    )
}
