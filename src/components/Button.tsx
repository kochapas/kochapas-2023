import { MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler;
  children: ReactNode;
}

/**
 * Button component based on bootstrap design.
 * @param onClick Function to run when the button is clicked.
 * @param children Children elements to render inside the main component.
 * @returns Button component.
 */
export const Button = ({ onClick, children }: Props) => {
  return (
    <span
      className="btn btn-outline-dark"
      onClick={onClick}
    >
      {children}
    </span>
  )
}
