import React from 'react'

const RepoCard = ({repo="sample", description="sample", stars=0, fork=0, language="sample"}) => {

  return (
    <div className='w-full min-h-24 p-3 sm:p-4 bg-gray-700 rounded-xl flex flex-col gap-2 sm:gap-4 shadow-md border border-gray-600'>
      <h3 className='text-sm sm:text-base font-semibold text-white truncate'>{repo}</h3>
      <p className='text-xs sm:text-sm text-gray-300 line-clamp-2 flex-1'>{description}</p>
      <div className="flex flex-row justify-between items-center text-xs text-gray-300">
        <span className='flex items-center gap-1'>
          <span>⭐</span>
          <span>{stars}</span>
        </span>
        <span className='flex items-center gap-1'>
          <span>🍴</span>
          <span>{fork}</span>
        </span>
        <span className='text-xs bg-gray-600 px-2 py-1 rounded'>{language}</span>
      </div>
    </div>
  )
}

export default RepoCard

