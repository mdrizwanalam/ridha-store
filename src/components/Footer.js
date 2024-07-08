export default function Footer() {
  return (
    <>
      <footer className="footer-distributed" style={{marginTop:'10px'}}>
        <div className="footer-left">
          <h3>
            RIDHA<span> STORE</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">RIDHA STORE © 2024</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>24, St. Haldoni Street</span> Greater Noida, Delhi NCR,
              India
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 8447308316</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@ridhastore.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            <b>Ridha Store</b> is a dynamic online clothing brand celebrated for
            its fusion of trendsetting styles and premium quality. Specializing
            in contemporary fashion for individuals who value both flair and
            comfort, <b>Ridha Store</b> has carved a niche as a go-to
            destination for the fashion-forward.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
