import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
  <h3>Additional Links</h3>
  <ul>
    <li><a href="../pages/index.jsx" target="_blank">About Us</a></li>
    <li><a href="../pages/index.jsx" target="_blank">Terms and Conditions</a></li>
    <li><a href="../pages/index.jsx" target="_blank">Return and Refund Policy</a></li>
  </ul>
</div>


      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+254 795213662</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>brianmuimipaul@gmail.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer