import type { Course } from '../types/course';

export function getCourses(): Course[]{
  const courses: Course[] = [{
    
      name: "Web Design",
      instructor: "Alice Johnson",
      duration: 20,
      topics: ["HTML", "CSS", "Bootstrap"],
    },
    {
      name: "React Fundamentals",
      instructor: "Bob Smith",
      duration: 25,
      topics: ["JSX", "Components", "Hooks"],
    },
    {
      name: "Full Stack with MERN",
      instructor: "Charlie Davis",
      duration: 40,
      topics: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];
  return courses;
}