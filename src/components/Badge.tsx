type Props = {
  text: string;
}

/**
 * Create a badge component to wrap around the text.
 * @param text A text to be contained inside the badge.
 * @returns Badge component.
 */
export const Badge = ({ text }: Props) => {
  return (
    <span className="m-1 ms-0 p-2 ps-3 pe-3 badge text-black bg-lilac">
      {text}
    </span>
  );
}
