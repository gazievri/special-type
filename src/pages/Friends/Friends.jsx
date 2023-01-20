import "./Friends.sass";
import People from "../../assets/images/People.svg";
import Companys from "../../assets/images/Companys.svg";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const navigate = useNavigate();

  return (
    <section className="friends">
      <h1 className="friends__title">ДРУЗЬЯ</h1>
      <ul className="friends__list">
        <li className="friends__method" onClick={() => navigate("/people")}>
          <h3 className="friends__item-title">Люди</h3>
          <img className="friends__item-img" src={People} alt="Люди" />
        </li>
        <li className="friends__method" onClick={() => navigate("/companies")}>
          <h3 className="friends__item-title">Компании</h3>
          <img className="friends__item-img" src={Companys} alt="Компании" />
        </li>
      </ul>
    </section>
  );
};

export default Friends;
 