function LoadMore({ onClick, isLoading = false }){
    return(
        <button
            onClick={onClick}
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg transition-colors shadow-md ${
                isLoading
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
        >
            {isLoading ? 'Loading...' : 'Load More'}
        </button>
    )
}

export default LoadMore