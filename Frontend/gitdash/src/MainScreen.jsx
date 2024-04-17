import React, { useEffect, useState } from "react";
import "./MainScreen.css";
import logo from "./assests/logo.png";
import moon from "./assests/moon.png";
import { Link } from "react-router-dom";
import "./RepoPostCard.css";
import arrow from "./assests/arrow.png";

export const MainScreen = () => {
  let [data, setData] = useState("");
  let [repodata, reposetData] = useState("");

  const [searchRepo, setsearchRepo] = useState("");
  let [searchRepoData, setsearchRepoData] = useState("");

  const api_URL = "https://api.github.com/users/";
  const repo_api_URL = "https://api.github.com/repos/";

  const getData = async () => {
    const username = localStorage.getItem("username");
    const response = await fetch(api_URL + username);
    data = await response.json();
    setData(data);
    const response1 = await fetch(api_URL + username + "/repos");
    repodata = await response1.json();
    reposetData(repodata);
  };

  const indiRepoData = async () => {
    const username = localStorage.getItem("username");
    const response1 = await fetch(repo_api_URL + username + "/" + searchRepo);
    searchRepoData = await response1.json();
    setsearchRepoData(searchRepoData);
  };

  const localRepoName = (name) => {
    localStorage.setItem("repoName", name);
  };

  const exitUser = () => {
    localStorage.removeItem("username");
  };
  useEffect(() => {
    getData();
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
      </div>
      <div className="mainScreen">
        <div className="userProfileDetails">
          <img src={data.avatar_url} alt="" />
          <h2 id="username">{data.login}</h2>
          <h2 id="fullname">{data.name}</h2>
          <h3 id="bio">{data.bio}</h3>
          <div id="githubLink">
            <a href={data.html_url}>See on Github</a>
          </div>
          <h1>{data.public_repos} Repo</h1>
          <h1>{data.followers} Followers</h1>
          <h1>{data.following} Following</h1>
          <div className="exitUser">
            <Link to="/" onClick={exitUser}>
              Exit User
            </Link>
          </div>
        </div>
        <div className="divider"></div>
        <div className="userRepoDetails">
          <div className="sNav">
            <button>
              <a to="/">Repositories</a>
            </button>
            <button>
              <Link>Forked</Link>
            </button>
            <button>
              <Link to="/username/follower">Followers</Link>
            </button>
            <button>
              <Link to="/username/following">Following</Link>
            </button>
          </div>
          <div className="repoMain1">
            <div className="repoSearch">
              <div className="sort">
                <div className="sortName">Sort</div>
                <img src={arrow} alt="" />
              </div>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search Repositories"
                  value={searchRepo}
                  onChange={(e) => setsearchRepo(e.target.value)}
                />
                <button id="searchbtn" onClick={indiRepoData}>
                  Search
                </button>
              </div>
            </div>
            <div className="repoMainLeft">
              {searchRepoData ? (
                <Link className="mainPostCard" to="/username/repo" onClick={localRepoName(searchRepoData.name)}>
                  <div className="name">
                    <h2>{searchRepoData.name}</h2>
                    <button>PUBLIC</button>
                  </div>
                  <div className="bio">
                    <h3>{searchRepoData.description}</h3>
                  </div>
                  <div className="repoInfo">
                    <h4 id="lang">{searchRepoData.language}</h4>
                    <h4>{searchRepoData.open_issues_count} Open Issues</h4>
                    <h4>{searchRepoData.forks} Fork</h4>
                  </div>
                </Link>
              ) : (
                <div className="repo">
                  {repodata.length > 0
                    ? repodata?.map((i) => {
                        return (
                          <Link
                            className="mainPostCard"
                            to="/username/repo"
                            onClick={localRepoName(i.name)}
                          >
                            <div className="name">
                              <h2>{i.name}</h2>
                              <button>PUBLIC</button>
                            </div>
                            <div className="bio">
                              <h3>{i.description}</h3>
                            </div>
                            <div className="repoInfo">
                              <h4 id="lang">{i.language}</h4>
                              <h4>{i.open_issues_count} Open Issues</h4>
                              <h4>{i.forks} Fork</h4>
                            </div>
                          </Link>
                        );
                      })
                    : ""}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};