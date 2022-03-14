import "../App.css";


function Card(props) {
  return (
    <div className="card flex col flex-25">        
      <h2 className="card-id">#{props.id}</h2>
      <figure className="card-logo flex">
        <img src={props.repoData.owner.avatar_url} alt={props.repoData.name + "_image"} />
      </figure>
      <h2 className="card-name">
        <a href={props.repoData.html_url}>{props.repoData.owner.login}</a>{" "}
      </h2>
      <ul className="card-list">
        <li className="username">
          <i className="fas icon fa-user"></i>
          <a href={props.repoData.owner.html_url}>{props.repoData.owner.login}</a>
        </li>
        <li>
          <i className="fas icon fa-star"></i>
          {props.repoData.stargazers_count} stars
        </li>
        <li>
          <i className="fas icon fa-code-branch"></i>
          {props.repoData.forks} forks
        </li>
        <li>
          <i className="fas icon fa-exclamation-triangle"></i>
          {props.repoData.open_issues + " open issues"}
        </li>
      </ul>
    </div>
  );
}

export default Card;
