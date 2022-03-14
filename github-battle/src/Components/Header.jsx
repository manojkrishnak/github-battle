import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="container header  flex justify-bt align-ct">
        <div>
          <NavLink className="nav" activeClassName="active" exact to="/">
            Popular
          </NavLink>
          <NavLink className="nav" activeClassName="active" to="/battle">
            Battle
          </NavLink>
        </div>
        <button>Dark Mode</button>
      </header>
    )
}

export default Header;