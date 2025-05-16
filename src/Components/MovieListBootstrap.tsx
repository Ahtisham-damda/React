import "./MovieListBootstrap.css";
function MovieListBootstrap() {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnlt2U3pD1ITusQbCa1LTDj5HjNTqCsvjGA&s"
              className="card-img-top movie-img-small"
              alt="Pathan"
            />
            <div className="card-body">
              <h5 className="card-title">Pathan </h5>
              <p className="card-text">
                pathan movie is a 2023 Indian Hindi-language action thriller
                film directed by Siddharth Anand.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://i.ytimg.com/vi/T_9dwaoDaaU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgfGpJYbGEncewVM9sLIP7F2Lasg"
              className="card-img-top movie-img-small"
              alt="Pushpa 2"
            />
            <div className="card-body">
              <h5 className="card-title">Pushpa 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://preview.redd.it/why-do-these-fan-made-posters-for-goat-look-better-than-the-v0-yl4k2mrm533d1.jpg?width=640&crop=smart&auto=webp&s=2454f0a082514f3f51fc73e4742d03118dd67026"
              className="card-img-top movie-img-small"
              alt="The Goat"
            />
            <div className="card-body">
              <h5 className="card-title">The Goat</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://img.nowrunning.com/content/movie/2022/fight-25733/Stills/fighter_2024114.jpg"
              className="card-img-top movie-img-small"
              alt="Fighter"
            />
            <div className="card-body">
              <h5 className="card-title">Fighter</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://wirally.com/wp-content/uploads/2019/06/2-RRR-Trailer.jpg"
              className="card-img-top movie-img-small"
              alt="RRR"
            />
            <div className="card-body">
              <h5 className="card-title">RRR</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://indiaglitz-media.s3.amazonaws.com/telugu/home/kalki-2898-ad-review-1.jpg"
              className="card-img-top movie-img-small"
              alt="Kalki"
            />
            <div className="card-body">
              <h5 className="card-title">Kalki</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
        {/* Add more cards in sets of 3 for more rows */}
      </div>
    </div>
  );
}
export default MovieListBootstrap;
