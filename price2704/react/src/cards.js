export default function Card(props) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card card__ shadow">
        <div className="card-body card__body">
          <h5 className="card-title text-center text-uppercase card__title">
            {props.plan}
          </h5>
          <h5 className="price text-center mb-3">
            ${props.price}
            <small className="h6"> / Month</small>
          </h5>
          <ul className="list-group">
            {props.item.map((item) => {
              if (!item.includes("✔️")) {
                return (
                  <li className="list-group-item list__group__item">{item}</li>
                );
              }
              return <li className="list-group-item">{item}</li>;
            })}
          </ul>
          <button className="button btn btn-primary text-uppercase font-weight-bold mt-3 py-2 w-100">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
