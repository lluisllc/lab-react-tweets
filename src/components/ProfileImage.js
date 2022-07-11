// function Tweet(props) {
//     console.log(props)
//     return (
//       <div className="tweet">
//         <img
//           src={props.tweet.user.image}
//           className="profile"
//           alt="profile"
//         />
import React from "react";

function ProfileImage(props) {
    console.log(props)
  return (
    <div className="tweet">
      <img src={props.image} className="profile" alt="profile" />
    </div>
  );
}
export default ProfileImage;
