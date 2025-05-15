import { getCourses } from "../Service/courseService";
import { Course } from "../types/course";
import CourseCard from "./CourseCard";

const CourseList2 = () =>{
    const courses: Course[] = getCourses();

    return(
     <div className="border border-info p-3 m-3">
        <h2>Available Courses</h2>
        {
         courses.map((course) => (
            <CourseCard
            title={course.name}
            instructor={course.instructor}
            duration={course.duration}
            topics={course.topics}
            />
         ))
        }
     </div>

    );
};
export default CourseList2;