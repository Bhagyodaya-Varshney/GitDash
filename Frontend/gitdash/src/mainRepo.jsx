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
          <div>
            <h2>Username/repoName</h2>
            <button id="PublicPrivate">PUBLIC</button>
          </div>
          <button id="linkGithub">See on Github</button>
        </div>
        <div className="repoMain">
          <div className="repoSection1">
            <div className="repoSection1Nav">
              <div className="abc">
                <button id="branch">main</button>
                <h3>0 Tags</h3>
              </div>
              <button id="codeCloneBtn">Code👇</button>
            </div>
          </div>
          <div className="repoSection2">
            <h2>About</h2>
            <h3>bio</h3>
            <div className="info">
              <p>4 forks</p>
              <p>0 Watching</p>
              <p>5 Open Issues</p>
            </div>
            <div className="lang">
              <h3>Language</h3>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
            <div className="contributors">
              <h3>Contributors</h3>
              <p>ABC</p>
              <p>XYZ</p>
            </div>
            <div className="extrainfo">
              <p>Created :</p>
              <p>Updated :</p>
              <p>Pushed :</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
