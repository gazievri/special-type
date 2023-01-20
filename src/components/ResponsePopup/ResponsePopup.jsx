import "./ResponsePopup.sass";
import ImageMasked from "../ImageMasked/ImageMasked";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ResponsePopup = ({
  dataForResponsePopup,
  setDataForResponsePopup,
}) => {
  const { isOpened, isSaccess } = dataForResponsePopup;
  const [message, setMessage] = useState({});
  const navigate = useNavigate();
  const [typePlug, setTypePlug] = useState(null);
  const [titleBtn, setTitleBtn] = useState(null);
  const { pathname } = useLocation();

  // Объект с надписями для модального окна и картинками
  const responseMessages = {
    registration: {
      plugType: "poster",
      success: {
        title: "Спасибо! Заявка отправлена.",
        subtitle: "В ближайшее время мы с Вами свяжемся!",
      },
      error: {
        title: "Что-то пошло не так...",
        subtitle: "Форму не удалось отправить.",
      },
    },
    review: {
      plugType: "review",
      success: {
        title: "Спасибо! Отзыв добавлен.",
        subtitle: "",
      },
      error: {
        title: "Что-то пошло не так...",
        subtitle: "Отзыв не удалось добавить.",
      },
    },
    volunteering: {
      plugType: "company",
      success: {
        title: "Спасибо! Заявка отправлена.",
        subtitle: "В ближайшее время мы с Вами свяжемся!",
      },
      error: {
        title: "Что-то пошло не так...",
        subtitle: "Форму не удалось отправить.",
      },
    },
  };

  // Установка текстов и картинки для модального окна в зависимости от того, на какой странице открылся попап
  const chooseTypeModal = (path) => {
    if (path === "/reviews/add-review") {
      return responseMessages.review;
    } else if (path === "/help/volunteering") {
      return responseMessages.volunteering;
    } else {
      return responseMessages.registration;
    }
  };

  // Обработчик закрытия попапа
  const handleClosePopup = () => {
    navigate(-1);
    setDataForResponsePopup({
      isOpened: false,
      isSaccess: false,
    });
  };

  // В заисимости от переданного ключа ответа сервер (успех/не успех) выбирается один из вариантов подписей
  useEffect(() => {
    const typeModal = chooseTypeModal(pathname);

    setTypePlug(typeModal.plugType);

    if (isSaccess) {
      setMessage(typeModal.success);
      setTitleBtn("Хорошо");
    } else {
      setMessage(typeModal.error);
      setTitleBtn("Попробовать снова");
    }
  }, [isSaccess, pathname]);

  return (
    <div className={`response ${isOpened && "response__status_opened"}`}>
      <div className="response__container">
        <div className="response__img-container">
          <ImageMasked lable={typePlug} />
        </div>
        <div className="response__text-block">
          <h3 className="response__title">{message?.title}</h3>
          {message?.subtitle && (
            <p className="response__subtitle">{message?.subtitle}</p>
          )}
        </div>
        <button
          className="response__btn"
          type="button"
          onClick={handleClosePopup}
        >
          {titleBtn}
        </button>
      </div>
    </div>
  );
};
