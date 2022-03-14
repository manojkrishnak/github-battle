import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Components/Card";
import Header from "./Components/Header";

import "./App.css";

function App() {
  let [activeFilter, setActiveFilter] = useState("All");
  let [reposData, setReposData] = useState([]);

  function handleActiveFilter(filter) {
    setActiveFilter((activeFilter = filter));
  }

  useEffect(() => {
    setReposData([]);
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${activeFilter}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        setReposData(data.items);
      })
      .catch((err) => alert(err));
  }, [activeFilter]);

  return (
    <>
      <Header />
      <div>
        <ul className="filters flex justify-ct">
          <li>
            <button
              className={activeFilter === "All" ? "active-filter" : ""}
              onClick={() => handleActiveFilter("All")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={activeFilter === "JavaScript" ? "active-filter" : ""}
              onClick={() => handleActiveFilter("JavaScript")}
            >
              JavaScript
            </button>
          </li>
          <li>
            <button
              className={activeFilter === "Ruby" ? "active-filter" : ""}
              onClick={() => handleActiveFilter("Ruby")}
            >
              Ruby
            </button>
          </li>
          <li>
            <button
              className={activeFilter === "Java" ? "active-filter" : ""}
              onClick={() => handleActiveFilter("Java")}
            >
              Java
            </button>
          </li>
          <li>
            <button
              className={activeFilter === "CSS" ? "active-filter" : ""}
              onClick={() => handleActiveFilter("CSS")}
            >
              CSS
            </button>
          </li>
          <li>
            <button
              className={activeFilter === "Python" ? "active-filter" : ""}
              onClick={() => handleActiveFilter("Python")}
            >
              Python
            </button>
          </li>
        </ul>
      </div>
      {
        reposData.length < 1 ? <div className="flex justify-ct align-ct loading"><p>Loading ...</p></div>: ""
      }
      <div className="flex justify-bt wrap container">
        {reposData.map((repo, i) => {
          return <Card key={i} repoData={repo} id={i + 1} />;
        })}
      </div>
    </>
  );
}

export default App;
