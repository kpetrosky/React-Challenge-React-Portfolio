import React from "react";
import footerImage from './images/background/jon6_GIF.gif';

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="row">
      <div className="col-sm-12 text-center">
        <img
          src={footerImage}
          alt="Footer Image"
          style={{ maxWidth: "25%" }}
        />
        <span>
          GitHub: <a href="https://github.com/kpetrosky">https://github.com/kpetrosky</a>
        </span>
        <span>
          LinkedIn: <a href="https://linkedin.com/in/krystal-petrosky-ab061126a">linkedin.com/in/krystal-petrosky-ab061126a</a>
        </span>
        <span>
          © 2023
        </span>
        <div className="back-to-top" onClick={handleBackToTop}>
          Back to Top
        </div>
      </div>
    </footer>
  );
}


