import Logo from "../images/Zuri.Internship_Logo.png"
import I4G from "../images/I4G.png"

const Footer = () => {
  return(
    <footer>
      <div className="footer__container">
        <img src={Logo} alt=""/>
        <p className="footer__text">HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="" />
      </div>
    </footer>
  );
}

export default Footer;