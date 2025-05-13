import { useState } from "react";

function CourseList() {
    const courses = [
       {
         id: "GD",
        title: "Graphic Designing With Canva",
        duration: "30 Days",
        description: "Learn Graphic Designing with Canva, a user-friendly design tool that allows you to create stunning graphics, presentations, and social media posts.", 
       },
        {
         id: "WD",
        title: "Advanced Web Designing",
        duration: "60 Days",
        description: "Master the art of web design with our Advanced Web Designing course. Learn HTML, CSS, JavaScript, and responsive design techniques to create stunning websites.", 
       },
        {
         id: "React",
        title: "Frontend Development with React and TypeScript",
        duration: "60 Days",
        description: "Become a proficient frontend developer with our React and TypeScript course. Learn to build dynamic web applications using React, TypeScript, and modern frontend tools.", 
       }
       ];

const [selectedIndex, setselectedIndex] = useState(-1);

       return(
        <>  
        <h2 className="text-primary">Course List</h2>
      <ul className="list-group">
        {courses.map((course,index) => (
          <li className={selectedIndex == index ? "list-group-item active" : "list-group-item"} 
          key={course.id} onClick={() => setselectedIndex(index)}>
            {course.title} - {course.duration}
            <br />
            <span className="small text-danger">{course.description}</span>
            </li>
            
          
        ))}
      </ul>
    </>
  );
}

export default CourseList;