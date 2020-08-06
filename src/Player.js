import React from "react";
import "./Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* Side Bar */}
        <SideBar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      {/* Footer */}
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
