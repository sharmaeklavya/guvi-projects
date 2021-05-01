export default function Card(props) {
  let isDisabled = props.disableState.includes(props.data.id);
  return (
    <div className="col-lg-4">
      <div className="card my-2">
        <img src={props.data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title text-primary">
            <a href="#" className="text-decoration-none">
              {props.data.title}
            </a>
          </h4>
          <h5 className="card-title font-weight-bold">${props.data.price}</h5>
          <p className="card-text">{props.data.desc}</p>
          <div className="card__footer d-flex justify-content-between align-items-center">
            <span className="stars">{starsCount(props.data.stars)}</span>
            <span className="">
              <button
                className="btn btn-primary text-right"
                onClick={() => {
                  props.handleClick(props.data);
                }}
                disabled={isDisabled}
              >
                Add Item
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // function to display rating stars
  function starsCount(stars) {
    let count = 5;
    let ratings = [];
    for (let i = 0; i < stars; i++) {
      ratings.push(<i className="fas fa-star"></i>);
    }
    while (stars < count) {
      ratings.push(<i className="far fa-star"></i>);
      count--;
    }
    return ratings;
  }
}
