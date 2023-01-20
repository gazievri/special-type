import "./Button.sass";
import { Link } from "react-router-dom";

// Принимает в качестве пропсов текст для кнопки и ширину
const Button = ({ title, width, route, fn = Function.prototype }) => {
  return (
    <Link to={route}>
      <button
        style={{ width: `${width}` }}
        className="button"
        onClick={fn}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
