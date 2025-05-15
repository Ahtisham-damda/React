interface MovieCard2Props {
    name:string;
    img:URL;
    rating:number;
    actors:string[];
    isrecommended:boolean;
}

function MovieCard2(props: MovieCard2Props) {

return(
    <div className="border border-secondary">
        <h2 className="text-info bg-primary">{props.name}</h2>
        <p>{}</p>

    </div>
)

}
export default MovieCard2;