// import { Router, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        {/* <Link to="/"> */}
        <div className="logo-site">
          <img
            className="logo-footer"
            src="/src/assets/logohackathon.png"
            alt="Logo du site"
          />
        </div>
        {/* </Link> */}
        <p> ©℗®™ Holitrip </p>
        <div className="logo-container">
          <img
            className="logo"
            src="/src/assets/logo_Facebook.svg"
            alt="Logo facebook"
          />
          <img
            className="logo"
            src="/src/assets/logo_Instagram.svg"
            alt="Logo instagram"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
