import CourseCard from "./CourseCard";
 
const CourseCardsList = ()=>{
    const courses =[
        {
            name: "Web Design",
            instructor: "Alice Johnson",
            duration: 20,
            topics: ["HTML", "CSS", "Bootstrap"],
        },
        {
            name: "Graphic Design",
            instructor: "Bob Smith",
            duration: 30,
            topics: ["Photoshop", "Illustrator", "Canva"],
        },
        {
            name: "Data Science",
            instructor: "Charlie Brown",
            duration: 40,
            topics: ["Python", "Pandas", "Machine Learning"],
        },
        {
            name: "Digital Marketing",
            instructor: "Diana Prince",
            duration: 25,
            topics: ["SEO", "Social Media", "Email Marketing"],
        },
    ];

    return(
        <div className="border border-info p-3 m-3" >
            <h2>Available Courses: </h2>
            {courses.map((course)=>(
                <CourseCard 
                title={course.name}
                instructor={course.instructor}
                duration={course.duration}
                topics={course.topics}/>

            ))}
        </div>

    )

}

export default CourseCardsList;