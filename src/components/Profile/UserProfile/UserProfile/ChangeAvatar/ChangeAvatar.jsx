import { useState, useRef, useEffect } from 'react';
import { updateAvatar } from '../../../../../services/upload';
import './ChangeAvatar.scss';

function ChangeAvatar({ profile, setProfile, setShowChangeAvatar }) {
  const [avatar, setAvatar] = useState();
  const [previewImage, setPreviewImage] = useState();
  const ref = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('avatar', avatar);
    try {
      const updatedProfile = await updateAvatar(profile, formData);
      localStorage.setItem('profile', JSON.stringify(updatedProfile.data));
      setProfile(updatedProfile.data);
      setShowChangeAvatar(false);
    } catch (error) {
      console.log(`El erroe es${error}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowChangeAvatar(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="changeAvatar">
      {previewImage && <img className="changeAvatar__preview" src={previewImage} alt="" />}
      <form className="changeAvatar__form" action="submit" onSubmit={handleSubmit}>
        <label className="changeAvatar__label" htmlFor="avatar">
          <input
            className="changeAvatar__input"
            type="file"
            accept="image/*"
            name="avatar"
            id="avatar"
            onChange={handleUpload}
          />
        </label>
        <button className="changeAvatar__button" type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ChangeAvatar;
