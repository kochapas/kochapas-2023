import { Badge } from "./Badge";

export const BadgeContainer = ({contents}) => {
  return (
    <>
      <div id="badge-container">
        {contents.map((skill, index) => <Badge key={`skill-${index}`} text={skill}/>)}
      </div>
    </>
  )
};
