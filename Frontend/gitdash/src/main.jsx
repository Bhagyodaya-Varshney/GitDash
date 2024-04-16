import "./main.css";
import React, { useState} from "react";
import logo from "./assests/logo.png";
import moon from "./assests/moon.png"
import { Link,useNavigate } from "react-router-dom";

export const Main = () => {

  const Navigate = useNavigate();

  const [username , setUsername] = useState("");
  let  [data , setData] = useState("");
  const api_URL = "https://api.github.com/users/";

  const userData = async(e) =>{
      e.preventDefault();
      const response = await fetch(api_URL+username);
      data = await response.json();
      if(data.message == "Not Found") setData("");
      else{
        setData(data);
      } 
  }
  const userMain = () =>{
    localStorage.setItem("username",data.login)
  }

  window.onpopstate = function(){
    userMain();
  };

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
        <div className="lightDarkMode"><img src={moon} alt="" /></div>
      </div>
      <div className="main">
          <form action="" className="main1" onSubmit={userData}>
            <input type="text" id="search-box" placeholder="Search a Github User" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <button type="submit" id="search-btn">Search</button>
          </form>
          {
            data ? <Link to="/username" className="UserData" onClick={userMain}>
              <div className="inner">
                <img src= {data.avatar_url} alt="" />
                <div className="data">
                  <h1>{data.login}</h1>
                  <h2>{data.name}</h2>
                  <h3>No. of Repositries: {data.public_repos}</h3>
                  <div className="followers">
                    <h2>{data.followers} Followers</h2>
                    <h2>{data.following} Following</h2>
                  </div>
                </div>
              </div>
            </Link> : <h1></h1>
          }
      </div>
      
    </>
  );
};
