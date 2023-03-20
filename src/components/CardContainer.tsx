import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
}

/**
 * Component using as a container of other cards.
 * The component mainly contains Header (title) and Body (children).
 * @param title The title of the card's header.
 * @param children Children elements to render inside the main component.
 * @returns CardContainer component.
 */
export const CardContainer = ({ title, children }: Props) => {
  return (
    <div className="card-container w-100 mb-4 p-2">
      <div className="w-100 border-bottom border-secondary">
        <h2 className="text--purple">{title?.toUpperCase()}</h2>
      </div>
      <div className="m-1">
        {children}
      </div>
    </div>
  );
}
