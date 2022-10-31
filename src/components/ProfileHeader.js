import Profile from "../images/profile-image.png";
import Share from "../images/share.png";
import ShareLg from "../images/share-lg.png";

const Header = () => {
  return(
    <div className="header">
      <img src={Share} alt="Share" className="share" />
      <img src={ShareLg} alt="Share" className="share--lg" />
      <img src={Profile} alt="Profile" id="profile__img" />
      <h2 id="twitter">Etanamie</h2>
      <p id="slack">Etanami Olatunji</p>
    </div>
  )
}

export default Header;