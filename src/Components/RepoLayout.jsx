import React from 'react'
import RepoCard from './RepoCard'
import LoadMore from './LoadMore'

const RepoLayout = () => {
  return (
    <div className='w-4/5 h-auto bg-cyan-700 flex flex-col items-center justify-center'>
      <div className='w-full h-auto p-4 grid grid-cols-2 justify-items-center items-center gap-2 bg-teal-600'>
          <RepoCard/>
          <RepoCard/>
          <RepoCard/>
          <RepoCard/>
      </div>
      <span>4 of 25</span>
      <LoadMore/>
    </div>
  )
}

export default RepoLayout