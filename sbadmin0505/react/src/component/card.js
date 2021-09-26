export default function Card(props) {
  const contentSymbols = () => {
    const value = props.data.bootstrap.sideIcon.includes("currency");
    return value === true
      ? `${props.data.bootstrap.contentIcon} ${props.data.content}`
      : `${props.data.content + props.data.bootstrap.contentIcon}`;
  };

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={"card shadow h-100 py-2 " + props.data.bootstrap.border}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={
                  "text-xs font-weight-bold text-uppercase mb-1 " +
                  props.data.bootstrap.titleColor
                }
              >
                {props.data.title}
              </div>
              <div
                className={
                  "h5 mb-0 font-weight-bold text-gray-800 " +
                  props.data.bootstrap.contentColor
                }
              >
                {contentSymbols()}
              </div>
            </div>
            <div className="col-auto">
              <i
                className={"text-gray-300 " + props.data.bootstrap.sideIcon}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
