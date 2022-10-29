import Profile from "../images/profile-image.png"

const Header = () => {
  return(
    <div>
      <img src={Profile} alt="Profile" />
      <h2>Annette Black</h2>
    </div>
  )
}

export default Header;