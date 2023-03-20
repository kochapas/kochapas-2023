import { ReactNode } from "react";
import styles from "@/styles/ScrollingDown.module.css";

type Props = {
  height?: string | number | undefined;
  className?: string;
  children?: ReactNode;
}

/**
 * Component to play the looping animation of children component moving down.
 * @param height Total height of the component.
 * @param className Class name for the root level of the component.
 * @param children Children components.
 * @returns ScrollingDown component.
 */
export const ScrollingDown = ({ height, className, children }: Props) => {
  return (
    <div
      className={`w-auto d-flex justify-content-center mt-3 mb-3 ${className}`}
      style={{
        height: height || "auto",
        maxHeight: height || "auto",
      }}
    >
      <div className={`${styles["scrolling-down__content"]} mt-auto`}>
        {children}
      </div>
    </div>
  )
}
