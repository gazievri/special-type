import "./Poster.sass";
import ImageMasked from "../ImageMasked/ImageMasked";
import { useNavigate } from "react-router-dom";

const Poster = ({ postersData, setItemForRegistration }) => {
  const navigate = useNavigate();
  const handleOnClick = (poster) => {
    setItemForRegistration(poster);
    navigate(`/registration/${poster.id}`);
  };

  for (let i = 0; i < postersData.length; i++) {
    return (
      <>
        {postersData.map((el) => (
          <li className="poster" key={el.id} onClick={() => handleOnClick(el)}>
            <ImageMasked item={el} lable="poster" />
            <h3 className="poster__title">{el.name}</h3>
            <h5 className="poster__subtitle">Начало: </h5> 
            <span className="poster__span">{el.date ? el.date.slice(11, 16).replace(/-/g, ".") : ''}</span>
            <h5 className="poster__subtitle">Цена билета:</h5>
            <span className="poster__span_red">{`${el.price}р`}</span>
            <h5 className="poster__subtitle">Адрес проведения:</h5>
            <address className="poster__span">{el.address}</address>
          </li>
        ))}
      </>
    );
  }
};

export default Poster;
