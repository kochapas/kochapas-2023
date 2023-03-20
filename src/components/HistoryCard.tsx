type Props = {
  title: string;
  subtitle: string;
  placeName: string;
  dateRange: string;
  location: string;
  tasks: string[];
}

/**
 * Multipurpose component to show basic chronological information about work and education.
 * @param title The title. Most noticeable.
 * @param subtitle Subtitle, render next to the title.
 * @param placeName Right under the title.
 * @param dateRange Next row under the placeName.
 * @param location Same row as dateRange.
 * @param tasks An array of string for the bullet point information.
 * @returns HistoryCard component.
 */
export const HistoryCard = ({ title, subtitle, placeName, dateRange, location, tasks }: Props) => {
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
