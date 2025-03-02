import './boxstyle.css'

export default function Showsmallbox({number,bgColor}){
    return(
        <div style={{backgroundColor:bgColor}}
        className="smallbox" >{number}</div>
    )
}