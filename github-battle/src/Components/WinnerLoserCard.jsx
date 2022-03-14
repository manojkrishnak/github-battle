import "../App.css";

// function winnerLoser(props){
//         if(props.scores.user1 > props.scores.user2 ){
//             return "Winner";
//         }else{
//             return "Loser";
//         }
// }

function WinnerLoserCard(props) {
  return (
    <div className="w-l-card flex col flex-25">
      <h2 className="card-id">
        {"Winner"}
      </h2>
      <figure className="card-logo flex">
        <img src={props.user.avatar_url} alt={props.user.login + "_image"} />
      </figure>
      <h2 className="score">Score: {props.i === 0 ? props.scores.user1: props.scores.user2}</h2>
      <h2 className="card-name">
        <a href={props.user.html_url}>{props.user.login}</a>{" "}
      </h2>
      <ul className="card-list">
        <li className="username">
          <i className="fas icon fa-user"></i>
          <a href={props.user.html_url}>{props.user.login}</a>
        </li>
        <li>
          <i className="fas icon fa-star"></i>
          {props.user.followers} stars
        </li>
        <li>
          <i className="fas icon fa-code-branch"></i>
          {props.user.following} forks
        </li>
        <li>
          <i className="fas icon fa-exclamation-triangle"></i>
          {props.user.public_repos}
        </li>
      </ul>
    </div>
  );
}

export default WinnerLoserCard;
