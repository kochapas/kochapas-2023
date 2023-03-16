import styles from "@/styles/ScrollingDown.module.css";

export const ScrollingDown = ({ height, className, children }) => {
  return (
    <div
      className={`w-auto d-flex justify-content-center mt-3 mb-3 ${className}`}
      style={{
        height: height,
        maxHeight: height
      }}
    >
      <div className={`${styles["scrolling-down__content"]} mt-auto`}>
        {children}
      </div>
    </div>
  )
}
