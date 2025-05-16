import "./CourseListBootstrap.css";
function CourseListBootstrap() {
  return (
    <div className="container mt-4">

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-jRZ8r7TmUYfX4yqoiabzWXlqMiU4mZbxw&s"
              className="card-img-top card-img-small"
              alt="Java Programming Language"
            />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">
                Java is a high-level, class-based, object-oriented programming
                language 
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s"
              className="card-img-top card-img-small"
              alt="Python Programming Language"
            />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text">
                Python is a high-level, interpreted programming language known
                for its readability and versatility.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"
              className="card-img-top card-img-small"
              alt="React Programming Language"
            />
            <div className="card-body">
              <h5 className="card-title">ReactJs</h5>
              <p className="card-text">
                React is a JavaScript library for building user interfaces,
                particularly single-page applications.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw-mCQT4z8tAqXY1cRPPuWxUVTKZ7XdtDMA&s"
              className="card-img-top card-img-small"
              alt="Laravel Programming Language"
            />
            <div className="card-body">
              <h5 className="card-title">Laravel</h5>
              <p className="card-text">
                Laravel is a PHP framework for web application development,
                known for its elegant syntax and powerful features.
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>{" "}

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFBd_Nuwt9YHM_K4PR7mXAH4wfTnDqpwY5g&s"
              className="card-img-top card-img-small"
              alt="Cyber Security Programming Language"
            />
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">
               Cyber security is the practice of protecting systems, networks, and
                programs from digital attacks Learn how to secure your systems .
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>{" "}

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/DATA%20SCIENCE%20MODEL.jpg?itok=Uw9IQgUd"
              alt="Data Science Programming Language"
            />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">
                Data science is a multidisciplinary field that uses scientific
                methods, processes, algorithms and systems to extract knowledge
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default CourseListBootstrap;
