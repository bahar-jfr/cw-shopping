type ButtonProps = {
  text: string;
  className: string;
};

function Button({ text, className ,onAdd}:ButtonProps) {
  return <button className={`text-white w-fit px-3 py-1.5 ${className}`} onClick={onAdd}>{text}</button>;
}

export default Button;
