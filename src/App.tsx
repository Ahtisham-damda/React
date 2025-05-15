import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import CourseList2 from './Components/CourseList2';
// import About from './Components/About';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
// import MovieCard2 from './Components/MovieCard2';
// import GreetUser from './Components/GreetUser';
// import CourseCardsList from './Components/CourseCardsList';
// import BookInfo from './Components/BookInfo';
import MovieCard from './Components/MovieCard';
// import CourseList from './Components/CourseList';
// import CourseCard from './Components/CourseCard';



function App() {
  return (
    <>

<BrowserRouter>
<div className="container my-5 text-center bg-dark  mt-0 text ">
        <Link className='m-4 text-info' to="/">Home</Link>  <Link className='m-4 text-info' to="/ProductList">Product</Link>  <Link className='m-4 text-info' to="/MovieCard">Movies</Link>
        <Link className='m-4 text-info' to="/CourseList2">CourseList</Link>
      </div>
{/* <nav className='navbar navbar-expand-lg bg-dark navbar-dark text-white my-5 flex justify-content-center'>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/CourseList2">CourseList</Link>
</nav> */}


<Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ProductList" element={<ProductList />}></Route>
        <Route path="/CourseList2" element={<CourseList2/>}></Route>
        <Route path="/MovieCard" element={<MovieCard name={'Ertugrul Ghazi'} rating={9.8} actors={['Ertugrul Ghazi,Turgut Alp,Bamsi Alp , Duaan Alp']} isrecommended={true} />}></Route>
      </Routes>


</BrowserRouter>




{/* <CourseList2 /> */}
{/* <ProductList/> */}

    {/* <GreetUser name='Ahtisham' message='Welcome to my Kingdom' /><hr />
    <CourseList/><hr />
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
actors={["Leonardo DiCaprio, Joseph"]}/> */}

</>
);}    


export default App;
