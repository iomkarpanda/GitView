import React from 'react'
import RepoCard from './RepoCard'
import LoadMore from './LoadMore'

const RepoLayout = ({ repos = [], loadMoreRepos, isLoadingMore, hasMoreRepos }) => {
  return (
    <div className='w-full max-w-4xl h-auto bg-gray-800 flex flex-col items-center justify-center rounded-lg p-2 sm:p-4 shadow-lg border border-gray-600'>
      <div className='w-full h-auto p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4'>
        {repos.map((repo, index) => (
          <RepoCard
            key={repo.id || index}
            repo={repo.name}
            description={repo.description || "No description"}
            stars={repo.stargazers_count || 0}
            fork={repo.forks_count || 0}
            language={repo.language || "Unknown"}
          />
        ))}
        {repos.length === 0 && (
          <>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
            <RepoCard/>
          </>
        )}
      </div>
      <span className="text-gray-400 text-xs sm:text-sm mb-2 mt-4">{repos.length} repositories</span>
      {hasMoreRepos && <LoadMore onClick={loadMoreRepos} isLoading={isLoadingMore} />}
    </div>
  )
}

export default RepoLayout