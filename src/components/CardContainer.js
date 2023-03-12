export const CardContainer = ({title, children}) => {
  return (
    <div className="card-container w-100 mb-4 p-2">
      <div className="w-100 border-bottom border-secondary">
        <h2 className="text--purple">{title?.toUpperCase()}</h2>
      </div>
      <div className="m-1">
        {children}
      </div>
    </div>
  );
}
