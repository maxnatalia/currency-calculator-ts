import { ReactComponent as GithubIcon } from "./gitHub.svg";
import { ReactComponent as LinkedInIcon } from "./linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <address className="footer__address">
        <a
          className="footer__address-link"
          title="nataliamazur1988@gmail.com"
          href="mailto:nataliamazur1988@gmail.com"
        >
          nataliamazur1988@gmail.com
        </a>
        <div className="footer__box">
          <a
            className="footer__box-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/maxnatalia"
            title="Github"
          >
            <GithubIcon className="footer__box-icon" />
          </a>
          <a
            className="footer__box-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/natalia-mazur-%C5%BCurek-136a35254/"
            title="LinkedIn"
          >
            <LinkedInIcon className="footer__box-icon" />
          </a>
        </div>
      </address>
      <p className="footer__copywrite">
        Natalia Mazur-Żurek &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
