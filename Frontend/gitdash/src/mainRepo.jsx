import React, { useState, useEffect } from "react";
import "./mainRepo.css";
import logo from "./assests/logo.png";
import moon from "./assests/moon.png";

export function Repo() {
  let [repoData, setRepoData] = useState("");
  let [repoLang, setRepoLang] = useState("");
  let [tags, setTags] = useState("");
 
  const getRepoData = async (e) => {
    const username = localStorage.getItem("username");
    const reponame = localStorage.getItem("repoName");
    const response = await fetch(
      "https://api.github.com/repos/" + username + "/" + reponame
    );
    repoData = await response.json();
    const res = await fetch(repoData.languages_url);
    repoLang = await res.json();
    console.log(repoLang);
    const res1 = await fetch(repoData.tags_url);
    tags = await res1.json();
    setRepoData(repoData);
    setRepoLang(repoLang);
    setTags(tags);
  };
  useEffect(() => {
    getRepoData();
    console.log("used");
  }, []);
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
            <h2>{repoData.full_name}</h2>
            <button id="PublicPrivate">PUBLIC</button>
          </div>
          <a id="linkGithub" href={repoData.html_url}>See on Github</a>
        </div>
        <div className="repoMain">
          <div className="repoSection1">
            <div className="repoSection1Nav">
              <div className="abc">
                <button id="branch">{repoData.default_branch}</button>
                <h3>{tags.length} Tags</h3>
              </div>
              <button id="codeCloneBtn">Code👇</button>
            </div>
          </div>
          <div className="repoSection2">
            <h2>About</h2>
            <h3>{repoData.description}</h3>
            <div className="info">
              <p>{repoData.forks} forks</p>
              <p>{repoData.watchers} Watching</p>
              <p>{repoData.open_issues} Open Issues</p>
            </div>
            <div className="lang">
              <h3>Language</h3>
              {repoLang.length > 0
                    ? repoLang?.map((i) => {
                        return (
                          <h4>BC</h4>
                        );
                      })
                    : ""}
            </div>
            <div className="extrainfo">
              <p>Created : {repoData.created_at}</p>
              <p>Updated : {repoData.updated_at}</p>
              <p>Pushed : {repoData.pushed_at}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
