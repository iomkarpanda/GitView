import { HomePage } from "./Pages/HomePage"
import { useEffect } from "react"

function App(){
    useEffect(()=>{
        document.title = "GitView"
    },[])
   
    return(
        <div className="min-h-screen min-w-full bg-amber-400 flex justify-center items-center">
            <HomePage/>
        </div>
    )

}

export default App