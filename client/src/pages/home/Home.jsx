import React from "react";
import "./home.css";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">
        <PostSide />
      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
