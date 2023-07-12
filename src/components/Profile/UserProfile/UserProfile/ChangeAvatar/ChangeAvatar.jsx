import { useState } from 'react';
import { updateAvatar } from '../../../../../services/upload';
import './ChangeAvatar.scss';

function ChangeAvatar(profile, setProfile) {
  const [avatar, setAvatar] = useState();

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
      console.log(`El erroe es${error}`);
    }
  };
  return (
    <div>
      <form className="userProfile__input" action="submit" onSubmit={handleSubmit}>
        <input className="userProfile__input" type="file" accept="image/*" name="avatar" onChange={handleUpload} placeholder="Upload" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ChangeAvatar;
