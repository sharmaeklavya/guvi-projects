export default function Card(props) {
  return (
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card card__ shadow">
        <div class="card-body card__body">
          <h5 class="card-title text-center text-uppercase card__title">
            {props.plan}
          </h5>
          <h5 class="price text-center mb-3">
            ${props.price}
            <small class="h6"> / Month</small>
          </h5>
          <ul class="list-group">
            {props.item.map((item) => {
              if (!item.includes("✔️")) {
                return (
                  <li class="list-group-item list__group__item">{item}</li>
                );
              }
              return <li class="list-group-item">{item}</li>;
            })}
          </ul>
          <button class="button btn btn-primary text-uppercase font-weight-bold mt-3 py-2 w-100">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
