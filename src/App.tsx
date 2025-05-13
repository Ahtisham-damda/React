import 'bootstrap/dist/css/bootstrap.css';
import GreetUser from './Components/GreetUser';
import CourseCardsList from './Components/CourseCardsList';
import BookInfo from './BookInfo';
import MovieCard from './MovieCard';



function App() {
  return (
    <>
    <GreetUser name='Ahtisham' message='Welcome to my Kingdom' /><hr />
<CourseCardsList />   <hr />
<BookInfo 
 title='Learning React'
 author='Alex Banks'
 year={2020}
 genres={["Programming","Web Development"]}/> <hr />
<MovieCard 
name='inception'
rating={9}
isrecommended={true}
actors={["Leonardo DiCaprio, Joseph"]}/>

</>
);}    


export default App;
