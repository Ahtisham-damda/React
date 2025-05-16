import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CourseListBootstrap from "./Components/CourseListBootstrap";
import MovieListBootstrap from "./Components/MovieListBootstrap";
import ProductListBootstrap from "./Components/ProductListBootstrap";
import ContactForm from "./Components/ContactForm";

// import {  Link, Route, Routes } from "react-router-dom";
// import CourseList2 from "./Components/CourseList2";
// import About from './Components/About';
// import Home from "./Components/Home";
// import ProductList from "./Components/ProductList";
// import MovieCard2 from './Components/MovieCard2';
// import GreetUser from './Components/GreetUser';
// import CourseCardsList from './Components/CourseCardsList';
// import BookInfo from './Components/BookInfo';
// import MovieCard from "./Components/MovieCard";
// import CourseList from './Components/CourseList';
// import CourseCard from './Components/CourseCard';

function App() {
  return (
    <>
      <h1 className="text-center bg-info text-danger fw-bolder lh-lg mb-0">
        WelCome User!
      </h1>
      <Navbar />

      <main className="container my-4 fullpage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courseList" element={<CourseListBootstrap />} />
          <Route path="/movieList" element={<MovieListBootstrap />} />
          <Route path="/productList" element={<ProductListBootstrap />} />
          <Route path="/contactForm" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />

      {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ProductList" element={<ProductList />}></Route>
          <Route path="/CourseList2" element={<CourseList2 />}></Route>
        </Routes> */}

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
  );
}

export default App;
