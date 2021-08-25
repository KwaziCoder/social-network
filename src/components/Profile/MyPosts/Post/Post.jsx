import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={classes.post}>
        <img src="https://cs6.pikabu.ru/post_img/2017/10/18/10/og_og_1508344369270066283.jpg" />
        post 1
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
