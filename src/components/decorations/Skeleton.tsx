import styles from "@/styles/Skeleton.module.css";

type Props = {
  width?: string | number;
  height?: string | number;
}

/**
 * A component use when something is loading.
 *
 * @param width Width of the component.
 * @param height Height of the component.
 * @returns Skeleton component.
 */
export const Skeleton = ({width, height}: Props) => {
  return (
    <div
      style={{ width: width || "auto", height: height || "auto" }}
      className="overflow-hidden"
    >
      <p className={`${styles["skeleton--text"]} text-break text-muted`}>
        █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
      </p>
    </div>
  )
}
