export default function ImgSlider(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner my-4">
        <div className="carousel-item active">
          <img
            src="https://loremflickr.com/540/260"
            className="d-block w-100"
            alt="cat-images"
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://placeimg.com/540/260/any"
            className="d-block w-100"
            alt="Humans"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://placekitten.com/540/260"
            className="d-block w-100"
            alt="cat-images"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
