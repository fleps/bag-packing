const Button = ({ children, style, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${style}`}>
      {children}
    </button>
  );
};

export default Button;
