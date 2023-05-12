import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p> ©℗®™ Holitrip </p>
        <div className="logo-container">
          <img
            className="logo"
            src="/src/assets/logo_Facebook.svg"
            alt="Logo 1"
          />
          <img
            className="logo"
            src="/src/assets/logo_Instagram.svg"
            alt="Logo 2"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
