import { Link } from "react-router-dom";
import RadioLogo from "../assets/radio/radioLogo.png";

function Header() {
  return (
    <div className="bgHeader ">
      <div>
        <img
          className="travel-logo z-3"
          src="/src/assets/logohackaton2.png"
          alt="logo"
        />
      </div>
      <Link to="/radio">
        <button
          className=" flex absolute right-0 mr-8 top-2 z-10 "
          type="button"
        >
          <img
            className="md:w-20 md:h-20 w-10"
            src={RadioLogo}
            alt={RadioLogo}
          />
        </button>
      </Link>
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
