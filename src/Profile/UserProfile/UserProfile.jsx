import "./UserProfile.scss";

function UserProfile() {
  return (
    <div className="userProfile">
      {/* <div className="userProfile__pic"> */}
      <img
        className="userProfile__img"
        src="https://picsum.photos/400"
        alt="random photo"
      />
      {/* </div> */}
      <div className="userProfile__text">
        <h1 className="userProfile__text__name">Federico Cordoba</h1>
        <h2 className="userProfile__text__email">email@example.com</h2>
      </div>
    </div>
  );
}

export default UserProfile;
