import UserProfile from '../components/Profile/UserProfile/UserProfile/UserProfile';
import ProfileAccordion from '../components/Profile/UserProfile/ProfileAccordion/ProfileAccordion';
import './Profile.scss';

function Profile() {
  return (
    <div className="profilePage">
      <UserProfile />
      <ProfileAccordion />
    </div>
  );
}

export default Profile;
