export const CardContainer = ({title, content}) => {
  return (
    <div className="w-100">
      <div className="w-100 border-bottom border-secondary">
        <h2 className="text--purple">{title}</h2>
      </div>
      <div className="m-1">
        {content}
      </div>
    </div>
  );
}
