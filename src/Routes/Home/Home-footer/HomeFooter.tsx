import { FaFacebook, FaTwitter } from "react-icons/fa6"
import "./HomeFooter.scss"
const HomeFooter = () => {
  return (
    <footer className="home-footer">
        <div className="home-footer__wrapper">
            <div className="home-footer__col">
                <h6>Buy</h6>
                <ul>
                    <li>Registration</li>
                    <li>eBay Money Back Guarantee</li>
                    <li>Bidding & buying help</li>
                    <li>Stores</li>
                    <li>eBay for Charity</li>
                    <li>Charity Shop</li>
                    <li>Seasonal Sales and events</li>
                </ul>
            </div>
            <div className="home-footer__cols">
                <div className="home-footer__col">
                    <h6>Sell</h6>
                    <ul>
                        <li>Start selling</li>
                        <li>How to sell</li>
                        <li>Business sellers</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
                <div className="home-footer__col">
                    <h6>Tools & apps</h6>
                    <ul>
                        <li>Developers</li>
                        <li>Security center</li>
                        <li>Site map</li>
                    </ul>
                </div>
            </div>
            <div className="home-footer__col">
                <h6>Stay Connected</h6>
                <ul>
                    <li><FaFacebook />Facebook</li>
                    <li><FaTwitter />Twitter</li>
                </ul>
            </div>
            <div className="home-footer__col">
                <h6>About eBay</h6>
                <ul>
                    <li>Company info</li>
                    <li>News</li>
                    <li>Investors</li>
                    <li>Careers</li>
                    <li>Diversity & Inclusion</li>
                    <li>Global Impact</li>
                    <li>Government relations</li>
                    <li>Advertise with us</li>
                    <li>Policies</li>
                    <li>Verified Rights Owner (VeRO) Program</li>
                    <li>eCI Licenses</li>
                </ul>
            </div>
            <div className="home-footer__cols">
                <div className="home-footer__col">
                    <h6>Help & Contact</h6>
                    <ul>
                        <li>Seller Center</li>
                        <li>Contact Us</li>
                        <li>eBay Returns</li>
                    </ul>
                </div>
                <div className="home-footer__col">
                    <h6>Community</h6>
                    <ul>
                        <li>Announcements</li>
                        <li>eBay Community</li>
                        <li>eBay for Business Podcast</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="home-footer__bottom">
            <strong>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</strong>
            <span>Accessibility,</span>
            <span>User Agreement,</span>
            <span>Privacy,</span>
            <span>Payments Terms of Use,</span>
            <span>Cookies,</span>
            <span>Your Privacy Choices</span>
            <span>and</span>
            <span>AdChoice</span>
        </div>
    </footer>
  )
}

export default HomeFooter