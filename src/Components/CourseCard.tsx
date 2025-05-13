interface CourseProps {
    title:String;
    instructor:String;
    duration:number;
    topics:string[];
}

const CourseCard = (props: CourseProps) => {
    return(
        <div className="border border-info p-3 m-3">
            <h2>{props.title}</h2>
            <p>Instructor: {props.instructor}</p>
            <p>Duration: {props.duration} Days</p>
            <p>Topic Covered:</p>
            <ol>
                {props.topics.map((topic,index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ol>
        </div>

    )
}
export default CourseCard;