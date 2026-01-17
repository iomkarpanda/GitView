import React from 'react'
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import GitGraph from '../Components/GitGraph'
import RepoLayout from '../Components/RepoLayout'



export const HomePage = () => {
  return (
    <div className='w-4/4 p-2 bg-amber-200 flex flex-col gap-4 items-center
                    sm:3/4 sm:bg-cyan-400 md:w-3/4 md:bg-emerald-700 lg:w-2/4 lg:bg-red-600'>
        <NavBar/>
        <SearchBar/>
        <GitGraph/>
        <RepoLayout/>


    </div>
  )
}


