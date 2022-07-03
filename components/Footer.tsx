import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      {/* Author */}
      <section>
        <div>
          <span>Frontend Mentor Challenge</span>
          <p>
            Solution developed by Jane Valencia &copy; 2022 All rights reserved.
          </p>
        </div>
        <div>
          <h3>Follow me</h3>
          <div className="footer__socials">
            <a className="footer__social-link">IG</a>
            <a className="footer__social-link">LI</a>
            <a className="footer__social-link">GitHub</a>
          </div>
        </div>
      </section>

      {/* Vercel */}
      <section>
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

export default Footer;
