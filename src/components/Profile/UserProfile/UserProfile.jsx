import './UserProfile.scss';

function UserProfile () {
  return (
    <div className="userProfile">
      <div className="userProfile__pic">
      <img className="userProfile__pic__img" src="https://picsum.photos/200/300" alt="random photo" />
      </div>
      <h1 className="userProfile__name">Full Name</h1>
      <h2 className="userProfile__email">email@example.com</h2>
    </div>
  )
}

export default UserProfile;
