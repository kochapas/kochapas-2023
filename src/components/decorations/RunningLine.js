import { useEffect } from "react";
import { useScrollLocation } from "@/hooks";
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
  const isHorizontalLine = !!width;
  const classNameBase = `running-line__${isHorizontalLine ? "horizontal" : "vertical"}`;
  const classExpand = styles[`${classNameBase}--expand`];
  const classHide = styles[`${classNameBase}--hide`];
  const scrollLocation = useScrollLocation();

  return (
    <div
      style={{
        width: isHorizontalLine ? width : 0,
        height: !isHorizontalLine ? height : 0,
      }}
      className={`position-absolute ${scrollLocation?.y > 20 ? classExpand : classHide}`}
    />
  );;
};
