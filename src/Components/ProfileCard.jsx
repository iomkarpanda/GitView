import React from 'react'
import Profile from '../assets/profile'

export const ProfileCard = ({

  avatar,
  profile = "Profile Name",
  login = "username",
  followers = 12,
  following = 12,
  country = "flag",
  bio = "This is a sample bio of github profile"
}) => {
  return (
    <div className='w-4/5 bg-white rounded-xl shadow-md flex p-4 gap-4'>
      
      {/* avatar-part */}
      <div className="avatar-part w-16 flex items-start">
        <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
          <Profile image = {avatar}/>
        </div>
      </div>

      {/* data-part */}
      <div className="data-part w-full flex flex-col gap-1">
        
        {/* name + country */}
        <span className='flex items-center justify-start gap-2'>
          <div className="profile-name font-semibold text-lg">
            {profile}
          </div>
          <p className="text-sm text-gray-500">{country}</p>
        </span>

        {/* username */}
        <p className='text-sm text-gray-500'>{login}</p>

        {/* followers / following */}
        <span className='flex gap-4 text-sm mt-1'>
          <p>
            <span className="font-semibold">{followers}</span>
            <span className="text-gray-500"> Followers</span>
          </p>
          <p>
            <span className="font-semibold">{following}</span>
            <span className="text-gray-500"> Following</span>
          </p>
        </span>

        {/* description */}
        <p className="profile-description text-sm text-gray-600 mt-2">
          {bio}
        </p>
      </div>
    </div>
  )
}

export default ProfileCard
