import { Badge } from "./Badge";

type Props = {
  contents: string[];
}

/**
 * Render an div that contains badge created from strings.
 * @param contents An array of strings.
 * @returns BadgeContainer component.
 */
export const BadgeContainer = ({contents}: Props) => {
  return (
    <>
      <div id="badge-container">
        {contents?.map((skill, index) => <Badge key={`skill-${index}`} text={skill}/>)}
      </div>
    </>
  )
};
