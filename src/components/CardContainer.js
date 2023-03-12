export const CardContainer = ({title, children}) => {
  return (
    <div className="w-100">
      <div className="w-100 border-bottom border-secondary">
        <h2 className="text--purple">{title?.toUpperCase()}</h2>
      </div>
      <div className="m-1">
        {children}
      </div>
    </div>
  );
}
