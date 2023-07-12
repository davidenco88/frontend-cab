import { useState } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import ChangeAvatar from './ChangeAvatar/ChangeAvatar';
import './UserProfile.scss';

function UserProfile() {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <>
      <div className="userProfile">
        <div className="userProfile__edit">
          <img
            className="userProfile__img"
            src={profile.avatar}
            alt="profile pic"
          />
          <button className="userProfile__button" type="button" onClick={() => setShowChangeAvatar(!showChangeAvatar)}>
            <BsPencilFill />
          </button>
        </div>
        <div className="userProfile__text">
          <h1 className="userProfile__text__name">{profile.fullName}</h1>
          <h2 className="userProfile__text__email">{profile.email}</h2>
          <h2 className="userProfile__text__email">{profile.roles[0].name}</h2>
        </div>
      </div>
      {showChangeAvatar && <ChangeAvatar profile={profile} setProfile={setProfile} />}
    </>
  );
}

export default UserProfile;
