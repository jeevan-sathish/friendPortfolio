import React from 'react'
import Dp from './Dp';
import ProfileData from './ProfileData';

const Profile = () => {
  return (
    <div className="w-[98%] h-[88vh] bg-transparent shadow-2xl backdrop-blur-5xl rounded-3xl flex flex-col sm:flex-row justify-around items-center p-4 gap-4 overflow-hidden rounded-tl-[200px] shadow-amber-800 ">
      <Dp />
      <ProfileData />
    </div>
  );
};

export default Profile;

