import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>

      <div>new post</div>
      <textarea />
      <button>Add post</button>

      <div>
        posts
        <Post message="How are you?" likesCount={5}/>
        <Post message="My first post..." likesCount={3}/>
      </div>
    </div>
  );
};

export default MyPosts;
