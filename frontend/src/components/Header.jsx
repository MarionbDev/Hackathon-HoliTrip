import { Link } from "react-router-dom";
import RadioLogo from "../assets/radio/radioLogo.png";
import Mail from "../assets/mail.svg";
import Loupe from "../assets/search2.svg";

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
          className=" flex absolute right-0 z-10 mr-1 md:mr-4 "
          type="button"
        >
          <img className="w-10 md:w-14  " src={RadioLogo} alt={RadioLogo} />
        </button>
      </Link>
      <Link to="/contact">
        <button
          className="flex absolute right-0 z-10 mr-2 mt-10 md:mr-6 md:mt-16 "
          type="button"
        >
          <img className=" w-8 md:w-11 " src={Mail} alt="message" />
        </button>
      </Link>
      <Link to="/search">
        <button
          className="flex absolute right-0 z-10 mr-2 mt-20 md:mr-6 md:mt-[118px] "
          id="search-button"
          type="button"
        >
          <img className="w-8 md:w-10" src={Loupe} alt="search" />
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
