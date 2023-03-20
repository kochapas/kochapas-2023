import { useScrollLocation, useWindowSize } from "@/hooks";
import styles from "@/styles/RunningLine.module.css";
/**
 * This function only use either width or height.
 * RunningLine is a component that will moves once user starts scrolling the page.
 *
 * @param width If the width present, the running line will be vertical line.
 * @param height If the height present, the running line will be horizontal line.
 * @param trigger (Experimental) Choose how running line interacts with user.
 */
export const RunningLine = ({ width, height }) => {
  const scrollLocation = useScrollLocation();
  const windowSize = useWindowSize();
  // DO not render this component if the user is on small screen.
  if (windowSize?.width < 992) {
    return (
      <></>
    );
  }

  const isHorizontalLine = !!width;
  const classNameBase = `running-line__${isHorizontalLine ? "horizontal" : "vertical"}`;
  const classExpand = styles[`${classNameBase}--expand`];
  const classHide = styles[`${classNameBase}--hide`];

  return (
    <div
      style={{
        width: isHorizontalLine ? width : 0,
        height: !isHorizontalLine ? height : 0,
        zIndex: -1,
      }}
      className={`position-absolute ${scrollLocation?.y > 20 ? classExpand : classHide}`}
    />
  );;
};
