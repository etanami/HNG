import Slack from "../images/Slack.png"
import Github from "../images/Github.png"

const Socials = () => {
  return(
    <div className="socials">
        <a href="https://hng9.slack.com/"><img src={Slack} alt="" /></a>
        <a href="https://github.com/etanami"><img src={Github} alt="" /></a>
    </div>
  )
}

export default Socials;