import UserProfile from '../components/Profile/UserProfile/UserProfile/UserProfile';
import ClientTrips from '../components/Profile/UserProfile/ClientTrips/ClientTrips';
import './Profile.scss';

function Profile() {
  return (
    <div className="profilePage">
      <UserProfile />
      <ClientTrips />
    </div>
  );
}

export default Profile;
