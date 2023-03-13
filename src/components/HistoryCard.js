export const HistoryCard = ({title, subtitle, placeName, dateRange, location, tasks}) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">{title}</h3>
        <p className="mt-auto mb-0 text-muted fst-italic text-end">{subtitle}</p>
      </div>
      <p className="mb-0">{placeName}</p>
      <div className="d-flex justify-content-between">
        <p className="mb-0 text-muted fst-italic">{dateRange}</p>
        <p className="mb-0 text-muted fst-italic text-end">{location}</p>
      </div>
      {!!tasks?.length && <p className="mb-0">Tasks</p>}
      <ul>
        {tasks?.map((task, index) => {
          return (
            <li key={index}>
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
