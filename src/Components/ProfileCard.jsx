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
    <div className='w-full bg-gray-700 rounded-xl shadow-lg flex flex-col sm:flex-row p-3 sm:p-4 gap-3 sm:gap-4 border border-gray-600'>

      {/* avatar-part */}
      <div className="avatar-part w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
        <Profile image={avatar}/>
      </div>

      {/* data-part */}
      <div className="data-part w-full flex flex-col gap-1 text-center sm:text-left">
        
        {/* name + country */}
        <span className='flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-1 sm:gap-2'>
          <div className="profile-name font-semibold text-base sm:text-lg text-white">
            {profile}
          </div>
          <p className="text-xs sm:text-sm text-gray-400">{country}</p>
        </span>

        {/* username */}
        <p className='text-xs sm:text-sm text-gray-400'>{login}</p>

        {/* followers / following */}
        <span className='flex gap-3 sm:gap-4 text-xs sm:text-sm mt-1 justify-center sm:justify-start'>
          <p>
            <span className="font-semibold text-blue-400">{followers}</span>
            <span className="text-gray-400"> Followers</span>
          </p>
          <p>
            <span className="font-semibold text-blue-400">{following}</span>
            <span className="text-gray-400"> Following</span>
          </p>
        </span>

        {/* description */}
        <p className="profile-description text-xs sm:text-sm text-gray-300 mt-2">
          {bio}
        </p>
      </div>
    </div>
  )
}

export default ProfileCard
