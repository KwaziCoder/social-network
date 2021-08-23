import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.background_image} />
      <div>avatar + name</div>
      <div>
        My posts
        <div>new post</div>
        <div>
          posts
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
