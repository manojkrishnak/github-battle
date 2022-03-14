import {  useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Header from "./Header";

function Battle() {
  const [user, setUser] = useState({
    user1: "",
    user2: "",
  });
  const [usersData, setUsersData] = useState({
    user1Data: {},
    user2Data: {},
  });

  function fetchData(user, userKey) {
    console.log(user, userKey)
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) =>
        setUsersData((prevState) => ({
          ...prevState,
          [userKey]: data,
        }))
      )
      .catch((err) => alert(err));
  }

  function handleSubmit(e, user, userKey) {
    e.preventDefault();
    fetchData(user, userKey);
  }

  function handleChange(e, user) {
    const username = e.target.value;
    setUser((prevState) => ({
      ...prevState,
      [user]: username,
    }));
  }

  function handleCancel(userKey, userDataKey){
    setUsersData((prevState) => ({
      ...prevState,
      [userDataKey]: {},
    }));
    setUser((prevState) => ({
      ...prevState,
      [userKey]: "",
    }))
  }


  return (
    <div className="container">
     <Header />
      <h2 className="battle-heading">Instructions</h2>
      <ul className="instructions flex justify-bt container">
        <li className="flex justify-ct align-ct col">
          <h2 className="sub-heading">Enter two Github users</h2>
          <svg
            className="battle-icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="#ffbf74"
          >
            <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
          </svg>
        </li>
        <li className="flex justify-ct align-ct col">
          <h2 className="sub-heading">Battle</h2>
          <svg
            className="battle-icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="#727373"
          >
            <path d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z" />
          </svg>
        </li>
        <li className="flex justify-ct align-ct col">
          <h2 className="sub-heading">See the winner</h2>
          <svg
            className="battle-icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="#ffd601"
          >
            <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z" />
          </svg>
        </li>
      </ul>
      <div className="compare-users">
        <h2 className="battle-heading">Players</h2>
        <div className="form flex align-ct justify-bt">
          {Object.keys(usersData.user1Data).length < 1 ? (
            <form className="form-1" onSubmit={(e) => handleSubmit(e, user.user1, "user1Data")}>
              <input
                type={"text"}
                name="username-1"
                className="username-1"
                value={user.user1}
                onChange={(e) => handleChange(e, "user1")}
                placeholder="enter github username"
              />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="user-found flex justify-bt align-ct">
              <img
                className="user-img"
                src={usersData.user1Data.avatar_url}
                alt={usersData.user1Data.login + "_img"}
              />{" "}
              <a className="username" href={usersData.user1Data.html_url}>
                {usersData.user1Data.login}
              </a>
              <span className="cancel" onClick={() => handleCancel("user1","user1Data")}>X</span>
            </div>
          )}
          {Object.keys(usersData.user2Data).length < 1 ? (
            <form className="form-2" onSubmit={(e) => handleSubmit(e, user.user2, "user2Data")}>
              <input
                type={"text"}
                className="username-2"
                onChange={(e) => handleChange(e, "user2")}
                name="username-2"
                value={user.user2}
                placeholder="enter github username"
              />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="user-found flex justify-bt align-ct">
              <img
                className="user-img"
                src={usersData.user2Data.avatar_url}
                alt={usersData.user2Data.login + "_img"}
              />{" "}
              <a className="username" href={usersData.user2Data.html_url}>
                {usersData.user2Data.login}
              </a>
              <span className="cancel" onClick={() => handleCancel("user2","user2Data")}>X</span>
            </div>
          )}
          
        </div>
        {
            Object.keys(usersData.user1Data).length > 1 && Object.keys(usersData.user2Data).length > 1 && (
              <div className="btn-container flex align-ct justify-ct"><Link className="battle-btn" to={{pathname: "/battle/results" , state: [{...usersData.user1Data}, {...usersData.user2Data}]}}>Battle</Link></div>
            )
          }
      </div>
    </div>
  );
}

export default Battle;
