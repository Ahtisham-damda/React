interface MovieProps{
    name:string;
    rating:number;
    actors:string[];
    isrecommended:boolean;
}

const MovieCard = (props:MovieProps)=>{
    return(
<div className="border border-secondary">
    <h2>{props.name}</h2>
    <p>Rating: {props.rating}/10</p>
    <p>Cast:</p>
    <ul>
    {props.actors.map((actor, i) => <li key={i}>{actor}</li>)}  
      </ul>

      <p>{props.isrecommended ? "Highly Recommended!" : "Optional Watch"}</p>
</div>

    )
}
export default MovieCard;