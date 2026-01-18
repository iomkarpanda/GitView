import React from 'react'
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import GitGraph from '../Components/GitGraph'
import RepoLayout from '../Components/RepoLayout'
import ProfileCard from '../Components/ProfileCard'
import { useState } from 'react'


export const HomePage = () => {

  const[loginName,setLoginName] = useState("Login Name")
  const[profileName,setProfileName] = useState("Profile Name")
  const[country,setCountry] = useState("country")
  const[bio,setBio] = useState("bio")
  const[followers,setFollowers] = useState("0")
  const[following,setFollowing] = useState("0")
  const [username, setUsername] = useState("")
  const [avatar,setAvatar] = useState("")
  const [repos, setRepos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMoreRepos, setHasMoreRepos] = useState(true)

   async function searchUser(username){
    const userdata = await fetch(`https://api.github.com/users/${username}`).then(res => res.json())

    setProfileName(userdata.name)
    setLoginName(userdata.login)
    setCountry(userdata.location)
    setBio(userdata.bio)
    setFollowers(userdata.followers)
    setFollowing(userdata.following)
    setAvatar(userdata['avatar_url'])
    console.log(userdata)

    // Reset pagination state
    setCurrentPage(1)
    setHasMoreRepos(true)
    setIsLoadingMore(false)

    // Fetch repositories
    const repoData = await fetch(`https://api.github.com/users/${username}/repos?per_page=8&page=1`).then(res => res.json())
    setRepos(repoData)
  }

  async function loadMoreRepos() {
    if (isLoadingMore || !hasMoreRepos) return

    setIsLoadingMore(true)
    const nextPage = currentPage + 1

    try {
      const newRepoData = await fetch(`https://api.github.com/users/${username}/repos?per_page=8&page=${nextPage}`).then(res => res.json())

      if (newRepoData.length === 0) {
        setHasMoreRepos(false)
      } else {
        setRepos(prevRepos => [...prevRepos, ...newRepoData])
        setCurrentPage(nextPage)
      }
    } catch (error) {
      console.error('Error loading more repos:', error)
    } finally {
      setIsLoadingMore(false)
    }
  }

  return (
    <div className='w-full max-w-4xl p-3 sm:p-4 bg-gray-800 rounded-xl shadow-2xl flex flex-col gap-4 sm:gap-6 items-center'>
        <NavBar/>
        <SearchBar username={username} setUsername={setUsername} searchUser={searchUser}/>
        <ProfileCard profile = {profileName} login={loginName} bio={bio} country={country} followers={followers} following={following} avatar={avatar}/>
        <GitGraph/>
        <RepoLayout repos={repos} loadMoreRepos={loadMoreRepos} isLoadingMore={isLoadingMore} hasMoreRepos={hasMoreRepos}/>


    </div>
  )
}


