import "./main.css";
import React, {useState,useEffect} from "react";
import logo from "./assests/logo.png";
import moon from "./assests/moon.png"
import { Link} from "react-router-dom";
import axios from "axios";
import { MainScreen } from "./MainScreen";

export const Main = () => {

  const [username , setUsername] = useState("");
  const  [data , setData] = useState(null);

  const userData = async() =>{
    try{
      const response = await axios.get(`http://localhost:3001/${username}`);
      setData(response.data);
      localStorage.setItem("username",username);
    }
    catch(e){console.error('Error fetching user data:', e)}
  }
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
      <div className="main">
          <div className="main1">
            <input type="text" id="search-box" placeholder="Search a Github User" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <button type="submit" id="search-btn" onClick={userData}>Search</button>
          </div>
          {
            data ? <Link to="/username" className="UserData">
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
