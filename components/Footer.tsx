import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitch, faTwitter, faYoutube, faMedium } from "@fortawesome/free-brands-svg-icons";

// Default Footer props.
const defaultFooterProps = {
  author: 'Jane Valencia',
  year: new Date().getFullYear().toString(),
}

// Define social media props.
type FooterProps = { 
  github? : string,
  linkedin? : string,
  instagram? : string,
  twitter? : string,
  youtube? : string,
  twitch? : string,
  medium? : string,
} & typeof defaultFooterProps;

const Footer = ( props : FooterProps) => {
  return (
    <footer className="footer p-8">
      <section className="footer__main flex flex-col md:flex-row justify-between my-4">
        {/* Author, Copyright, Brand */}
        <div className="footer__brand-copyright">
          <span>Frontend Mentor Challenge</span>
          <p>Copyright &copy; { props.year } { props.author }. All rights reserved.</p>
        </div>

        {/* Social Links */}     
        <div className="footer__socials">
          <h3>Let's connect!</h3>
          <div className="footer__socials-links">
            {/* GitHub */}
            { props.github && (
              <a className="footer__social-link" href={ props.github }>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            ) }

            {/* LinkedIn */}
            { props.linkedin && (
              <a className="footer__social-link" href={ props.linkedin }>
                <FontAwesomeIcon icon={ faLinkedin } />
              </a>
            ) }

            {/* Instagram */}
            { props.instagram && (
              <a className="footer__social-link" href={ props.instagram }>
                <FontAwesomeIcon icon={ faInstagram } />
              </a>
            ) }

            {/* Twitter */}
            { props.twitter && (
              <a className="footer__social-link" href={ props.twitter }>
                <FontAwesomeIcon icon={ faTwitter } />
              </a>
            ) }

            {/* YouTube */}
            { props.youtube && (
              <a className="footer__social-link" href={ props.youtube }>
                <FontAwesomeIcon icon={ faYoutube } />
              </a>
            ) }

            {/* Twitch */}
            { props.twitch && (
              <a className="footer__social-link" href={ props.twitch }>
                <FontAwesomeIcon icon={ faTwitch } />
              </a>
            ) }

            {/* Medium */}
            { props.medium && (
              <a className="footer__social-link" href={ props.medium }>
                <FontAwesomeIcon icon={ faMedium } />
              </a>
            ) }
          </div>
        </div>
      </section>

      {/* Vercel */}
      <section className="footer__poweredby">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </section>
    </footer>
  )
}
Footer.defaultProps = defaultFooterProps;

export default Footer;
