import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.background_image} />
      <div>avatar + name</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
