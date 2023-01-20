import { useEffect } from "react";
import { useState } from "react";
import { mainApi } from "../../utils/api/mainApi";
import { useLocation } from "react-router-dom";
import "./Captcha.sass";

const Captcha = ({ setIsCaptchaOk, isCaptchaOk }) => {
  const [captcha, setCaptcha] = useState({});
  const { pathname } = useLocation();
  const [styleCaptcha, setStyleCaptcha] = useState({});
  const [styleCaptchaImg, setStyleCaptchaImg] = useState({});
  const [captchaValue, setCaptchaValue] = useState("");

  // Функция загрузки капчи с сервера
  const getCaptcha = () => {
    mainApi
      .postCaptcha()
      .then((res) => setCaptcha(res))
      .catch((err) => console.log(err));
    setCaptchaValue("");
    setIsCaptchaOk(false);
  };

  // Получаем значение input с введенными пользователем данными
  const handleChange = (e) => {
    setCaptchaValue(e.target.value);
  };

  // Запускаем функцию запроса капчи при загрузке элемента
  useEffect(() => {
    getCaptcha();
  }, []);

  // Запуск функции как только ввели 4 символа для проверки капчи
  useEffect(() => {
    if (captchaValue?.length === 4) {
      const data = {
        captcha_key: captcha.captcha_key,
        captcha_value: captchaValue,
      };

      mainApi
        .checkCaptcha(data)
        .then((res) => {
          res.ok === "Check" ? setIsCaptchaOk(true) : setIsCaptchaOk(false);
        })
        .catch((err) => {
          console.log(err);
          setCaptchaValue("");
        });
    }
  }, [captchaValue]);

  // Проверяем адрес страницы на которой отрисовывается элемент и меняем стиль
  // Если страница с формой Помощь, то макс ширина компонента 100%
  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/help/volunteering")
      setStyleCaptcha({
        maxWidth: "100%",
      });
  }, [pathname]);

  // Устанавливаем стиль после получения капчи с сервера, чтобы избежать ошибки при загрузке компонента
  useEffect(() => {
    if (captcha.captcha_image)
      setStyleCaptchaImg({
        backgroundImage: `url('data:image/png;base64,${captcha.captcha_image}')`,
      });
  }, [captcha]);

  return (
    <div className="captcha" style={styleCaptcha}>
      <div className="captcha__container">
        <div className="captcha__img" style={styleCaptchaImg} />
        <button
          type="button"
          className="captcha__btn"
          onClick={() => getCaptcha()}
        >
          Обновить <div className="captcha__btn-icon" />
        </button>
      </div>
      <input
        type="text"
        name="captchaValue"
        className={`captcha__input ${
          isCaptchaOk && "captcha__input_captcha_ok"
        }`}
        placeholder="Введите код с картинки"
        onChange={handleChange}
        required
        maxLength="4"
        minLength="4"
        disabled={isCaptchaOk && true}
        value={captchaValue}
      />
    </div>
  );
};

export default Captcha;
