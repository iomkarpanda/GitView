import { HomePage } from "./Pages/HomePage"
import { useEffect } from "react"

function App(){
    useEffect(()=>{
        document.title = "GitView"
    },[])
   
    return(
        <div className="min-h-screen w-full bg-gray-900 flex justify-center items-center p-2 sm:p-4">
            <HomePage/>
        </div>
    )

}

export default App