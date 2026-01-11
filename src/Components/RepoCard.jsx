import React from 'react'

const RepoCard = ({repo="sample",description="sample",stars=0,fork=0,language="sample"}) => {
  return (
    <div className='w-3/4 h-24 p-4 bg-white rounded-xl flex flex-col gap-4'>
      <h3 className='text-semibold'>{repo}</h3>
      <div className="box w-full h-10 ">
        <ul className='text-xs flex flex-row justify-start gap-2 items-center'>
          <li>{stars}</li>
          <li>{fork}</li>
          <li>{language}</li>
        </ul>
      </div>
    </div>
  )
}

export default RepoCard