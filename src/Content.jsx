function Content (props){

    return(
        <article id={props.key}>
            <img src={props.image} alt="" className="mg-b"/>
            <h4>{props.name}</h4>
            <p className="mg-b blue">{props.job}</p>
            <p className="mg-b">{props.text}</p>
            <span onClick={props.back}>&lt;</span> <span onClick={props.next}>&gt;</span><br />
            <button onClick={props.surprise}>Surprise Me</button>
        </article>
    )
}

export default Content