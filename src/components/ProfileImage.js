import React from "react";

function ProfileImage(props) {
    console.log(props)
  return (
    <div className="profile">
      <img src={props.image} className="profile" alt="profile" />
    </div>
  );
}
export default ProfileImage;
