import React, { useEffect, useState } from "react";
import "./MainScreen.css";
import logo from "./assests/logo.png";
import moon from "./assests/moon.png";
import { Link } from "react-router-dom";
import "./RepoPostCard.css";
import arrow from "./assests/arrow.png";

export const Follower = () => {
  let [data, setData] = useState("");
  let [followerdata, followersetData] = useState("");

  const api_URL = "https://api.github.com/users/";

  const getData = async () => {
    const username = localStorage.getItem("username");
    const response = await fetch(api_URL + username);
    data = await response.json();
    setData(data);
    const response1 = await fetch(api_URL + username + "/followers");
    followerdata = await response1.json();
    followersetData(followerdata);
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
              <Link>Followers</Link>
            </button>
            <button>
              <Link>Following</Link>
            </button>
          </div>
          <div className="repoMainLeft">
            {
              <div className="repo">
                {followerdata.length > 0
                  ? followerdata?.map((i) => {
                      return (
                        <div className="mainPostCard">
                          <img src={i.avatar_url} alt="" />
                          <div className="name">
                            <h2>{i.login}</h2>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};
