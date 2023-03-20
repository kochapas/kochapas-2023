export const Button = ({onClick, children}) => {
  return (
    <span
      className="btn btn-outline-dark"
      onClick={onClick}
    >
      {children}
    </span>
  )
}
