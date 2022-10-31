
const LinkSection =(props) => {
  return (
    <section>
      <a 
        href={props.href} 
        id={props.id}
        title={props.title}
      >{props.name}
      </a>
    </section>
  )
}

export default LinkSection;