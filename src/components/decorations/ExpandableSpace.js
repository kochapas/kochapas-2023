import { useWindowSize } from "@/hooks";

export const ExpandableSpace = ({ expanded, height }) => {
  const windowSize = useWindowSize();
  // DO not render this component if the user is on small screen.
  if (windowSize?.width < 992) {
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
