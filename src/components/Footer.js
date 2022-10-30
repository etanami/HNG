import Logo from "../images/Zuri.Internship_Logo.png"
import I4G from "../images/I4G.png"

const Footer = () => {
  return(
    <footer>
      <img src={Logo} alt="" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="" />
    </footer>
  );
}

export default Footer;