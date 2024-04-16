import React from "react";
import "./mainRepo.css";
import logo from "./assests/logo.png";
import moon from "./assests/moon.png";

export const Repo = () => {
  return (
    <>
      <div className="nav">
        <div className="logoMain">
          <img src={logo} alt="" />
          <div className="logo">
            <h2>Git</h2>
            <h2 id="Finder">Finder</h2>
          </div>
        </div>
        <div className="lightDarkMode">
          <img src={moon} alt="" />
        </div>
      </div>
      <div className="repoMainScr">
        <div className="repoNav">
            <h2>Username/repoName</h2>
            <button id="PublicPrivate">PUBLIC</button>
        </div>
        <div className="repoMain">
            <div className="repoSection1"></div>
            <div className="repoSection2">
                <h2>About</h2>
                <h3>bio</h3>
            </div>
        </div>
      </div>
    </>
  );
};
