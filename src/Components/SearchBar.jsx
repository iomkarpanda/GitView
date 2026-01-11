import React from 'react'
import SearchIcon from '../assets/search'

export const SearchBar = () => {
  return (
    <div className='w-4/5 h-10 bg-white p-4 gap-2 rounded-3xl flex flex-row justify-start items-center' placeholder='Enter your Username' >
        <SearchIcon/>
        <input placeholder='Enter Username' className='w-full outline-none' />
    </div>
  )
  
}

export default SearchBar