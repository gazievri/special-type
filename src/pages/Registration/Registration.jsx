import "./Registration.sass";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Registration = ({ itemForRegistration, setDataForResponsePopup }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };

  const createProperAnkor = () => {
    if (itemForRegistration.price) {
      return "Афиша / Мероприятие / Регистрация";
    }
    return "Расписание занятий и репетиций / Репетиция / Регистрация";
  };

  const ankor = createProperAnkor();

  // Прокручивание в верх элемента
  const scrollTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  // Использование функции прокрутки в верх элемента
  useEffect(() => {
    scrollTop()
  }, [])

  return (
    <section className="registration">
      <nav className="registration__go-back" onClick={handleOnClick}>
        <div className="registration__arrow" />
        <p className="registration__text">{ankor}</p>
      </nav>
      <Form itemForRegistration={itemForRegistration} setDataForResponsePopup={setDataForResponsePopup} />
    </section>
  );
};

export default Registration;
