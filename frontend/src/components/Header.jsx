import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bgHeader p-5">
      <Link to="/">
        <div>
          <img
            className="travel-logo z-3"
            src="/src/assets/logohackaton2.png"
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;
