import React from 'react'
import SearchIcon from '../assets/search'

import ProfileCard from './ProfileCard'

export const SearchBar = ({ username, setUsername, searchUser }) => {


  return (
    <div className='w-full h-10 sm:h-12 bg-gray-700 p-2 sm:p-4 gap-2 sm:gap-3 rounded-3xl flex flex-row justify-start items-center shadow-lg border border-gray-600' >
        <SearchIcon/>
        <input placeholder='Enter Username' className='flex-1 outline-none bg-transparent text-white placeholder-gray-400 text-sm sm:text-base' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="button" className='px-3 sm:px-4 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap' onClick={() => searchUser(username)}>Search</button>
    </div>
  )

}

export default SearchBar
