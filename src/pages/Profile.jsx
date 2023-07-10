import UserProfile from '../components/Profile/UserProfile/UserProfile';
import RegularUserTrips from '../components/Profile/UserProfile/RegularUserTrips/RegularUserTrips';
import './Profile.scss';

function Profile() {
  return (
    <div className="profilePage">
      <UserProfile />
      <RegularUserTrips />
    </div>
  );
}

export default Profile;
