import { useState } from 'react';
import { updateAvatar } from '../../../services/upload';
import './UserProfile.scss';

function UserProfile() {
  const [avatar, setAvatar] = useState();
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('avatar', avatar);

    try {
      const updatedProfile = await updateAvatar(profile, formData);
      localStorage.setItem('profile', JSON.stringify(updatedProfile.data));
      setProfile(updatedProfile.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="userProfile">
      <img
        className="userProfile__img"
        src={profile.avatar}
        alt="profile pic"
      />
      <div className="userProfile__text">
        <form action="submit" onSubmit={handleSubmit}>
          <input type="file" accept="image/*" name="avatar" onChange={handleUpload} />
          <button type="submit">Upload</button>
        </form>
        <h1 className="userProfile__text__name">{profile.fullName}</h1>
        <h2 className="userProfile__text__email">{profile.email}</h2>
        <h2 className="userProfile__text__email">{profile.roles[0].name}</h2>
      </div>
    </div>
  );
}

export default UserProfile;
