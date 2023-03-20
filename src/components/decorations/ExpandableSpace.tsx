import { useWindowSize } from "@/hooks";

type Props = {
  expanded: boolean,
  height: string | number,
}

/**
 * Component for creating empty space that can be expanded when expanded prop is changed.
 * @param expanded true = expand the space / false = collapse the space.
 * @param height Height (minHeight) of the component when it's expanded.
 * @returns ExpandableSpace component.Empty component if windowSize hook doesn't work.
 */
export const ExpandableSpace = ({ expanded, height }: Props) => {
  const windowSize = useWindowSize();
  // Do not render this component if the user is on small screen.
  if (windowSize?.width === undefined || windowSize?.width < 992) {
    return (
      <></>
    );
  }

  return (
    <div className={`${expanded ? "space--expand" : "space--hide"}`}>
      <div style={{ minHeight: height }} />
    </div>
  );


};
