
import {useState} from "react"
function Counter(){
    const [cnt , setCnt] = useState(1);

    return (
        <>
            <h1>Count : {cnt}</h1>
            <button onClick={()=>setCnt(cnt+1)}>Inccreament count</button>
        </>
    )
}

export default Counter ;  