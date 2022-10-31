
const LinkButton =(props) => {
  return (
    <div className="link--card">
      <a 
        href={props.href} 
        id={props.id}
        title={props.title}
      >{props.name}
      </a>
    </div>
  )
}

export default LinkButton;