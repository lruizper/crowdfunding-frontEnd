function FooterBar() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default FooterBar;