import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import WinnerLoserCard from "./WinnerLoserCard";

function BattleCompare() {
  const location = useLocation();
  const [scores, setScores] = useState({
    user1: 0,
    user2: 0,
  });

  useEffect(() => {
    location.state.map((user, i) => {
      const name = "user" + (i + 1);
      return setScores((prevState) => ({
        ...prevState,
        [name]: user.followers * 20 + user.public_repos,
      }));
    });
  }, [location.state]);

  return (
    <>
      <Header />
      <div className="container flex justify-ct align-ct">
      {location.state.map((user,i) => <WinnerLoserCard key={i} user={user} i={i} scores={scores}/>)}
      </div>
      <div className="btn-container flex justify-ct align-ct">
      <Link className="battle-btn" to="/battle">Reset</Link>
      </div>
    </>
  );
}

export default BattleCompare;
