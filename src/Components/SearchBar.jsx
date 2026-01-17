import React from 'react'
import SearchIcon from '../assets/search'
import { useState } from 'react'
import ProfileCard from './ProfileCard'

export const SearchBar = () => {
  const[loginName,setLoginName] = useState("")
  const[profileName,setProfileName] = useState("")
  const[country,setCountry] = useState("")
  const[bio,setBio] = useState("")
  const[followers,setFollowers] = useState("")
  const[following,setFollowing] = useState("")
  const [username, setUsername] = useState("")
  const [avatar,setAvatar] = useState("")

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
  }

  return (
    <>
    <div className='w-4/5 h-10 bg-white p-4 gap-2 rounded-3xl flex flex-row justify-start items-center' >
        <SearchIcon/>
        <input placeholder='Enter Username' className='w-full outline-none' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="button" className='text-sm' onClick={() => searchUser(username)}>Search</button>
    </div>

    <ProfileCard profile = {profileName} login={loginName} bio={bio} country={country} followers={followers} following={following} avatar={avatar}/>
    </>
  )
  
}

export default SearchBar