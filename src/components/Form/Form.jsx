import "./Form.sass";
import { useForm } from "react-hook-form";
import {
  nameRegExp,
  descriptionRegExp,
  emailRegExp,
  phoneRegExp,
} from "../../utils/regExp";
import { sendEmail } from "../../utils/api/emailJSApi";
import Captcha from "../Capcha/Captcha";
import {
  YOUR_PUBLIC_KEY,
  REGISTRATION_TEMPLATE_ID,
  YOUR_SERVICE_ID,
} from "../../utils/emailJS";
import { useState } from "react";

const Form = ({ itemForRegistration, setDataForResponsePopup }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isCaptchaOk, setIsCaptchaOk] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const { name } = itemForRegistration;

  // Меняю последнюю букву в названии формы для переиспользования в subtitle
  const changeEnding = () => {
    if (itemForRegistration.price) {
      return "мероприятие";
    } else {
      return "репетицию";
    }
  };

  const subtitle = changeEnding();

  // Обработчик сабмита формы
  const onSubmit = (data) => {
    // Создаем объект, который в себе содержит данные события и данные формы (для удобства, эту операцию можно удалить)
    const registrationData = {
      ...data,
      ...itemForRegistration,
    };

    // Активируем стиль кнопки сабмита на активный для индикации процесса отправки данных
    setIsBtnActive(true);

    // Формируем объект для отправки на сервер с учетом используемого шаблона на сервисе emailJS
    const dataToSend = {
      service_id: YOUR_SERVICE_ID,
      template_id: REGISTRATION_TEMPLATE_ID,
      user_id: YOUR_PUBLIC_KEY,
      template_params: {
        name: `${registrationData.firstName} ${registrationData.secondName}`,
        phone: registrationData.phoneNumber,
        email: registrationData.email,
        comment: registrationData.comments,
        agree: "Согласен",
        event: registrationData.name,
        address: registrationData.address,
        date: registrationData.date,
      },
    };

    // Отправляем данные на сервер
    sendEmail(dataToSend)
      .then(() => {
        setIsBtnActive(false);
        setDataForResponsePopup({
          isOpened: true,
          isSaccess: true,
        });
      })
      .catch((err) => {
        setDataForResponsePopup({
          isOpened: true,
          isSaccess: false,
        });
        console.log(err);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">{name}</h2>
      <p className="form__subtitle">{`Регистрация на ${subtitle}`}</p>
      <p className="form__required-field">
        <span className="form__asterisk">&#x2a;</span> - обязательные к
        заполнению поля
      </p>
      <div className="form__inputs-block">
        <label className="form__input-lable">
          <span>
            Имя <span className="form__asterisk">&#x2a;</span>
          </span>
          <input
            className="form__input-field"
            placeholder="Введите"
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Обязательное поле",
              maxLength: {
                value: 30,
                message: "Не более 30 символов",
              },
              minLength: {
                value: 2,
                message: "Введите не менее 2 символов",
              },
              pattern: {
                value: nameRegExp,
                message: "Введите корректное значение",
              },
            })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName && (
            <p role="alert" className="form__error-text">
              {errors.firstName?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          <span>
            Фамилия <span className="form__asterisk">&#x2a;</span>
          </span>
          <input
            className="form__input-field"
            placeholder="Введите"
            type="text"
            name="secondName"
            {...register("secondName", {
              required: "Обязательное поле",
              maxLength: {
                value: 30,
                message: "Не более 30 символов",
              },
              minLength: {
                value: 2,
                message: "Введите не менее 2 символов",
              },
              pattern: {
                value: nameRegExp,
                message: "Введите корректное значение",
              },
            })}
            aria-invalid={errors.secondName ? "true" : "false"}
          />
          {errors.secondName && (
            <p role="alert" className="form__error-text">
              {errors.secondName?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          <span>
            Телефон <span className="form__asterisk">&#x2a;</span>
          </span>
          <input
            className="form__input-field"
            placeholder="+7 (ххх) ххх-хх-хх"
            type="number"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: "Обязательное поле",
              maxLength: {
                value: 12,
                message: "Не более 12 символов",
              },
              minLength: {
                value: 10,
                message: "Введите не менее 10 символов",
              },
              pattern: {
                value: phoneRegExp,
                message: "Введите корректный номер телефона",
              },
            })}
          />
          {errors.phoneNumber && (
            <p role="alert" className="form__error-text">
              {errors.phoneNumber?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          Электронная почта
          <input
            className="form__input-field"
            placeholder="example@mail.ru"
            type="email"
            name="email"
            {...register("email", {
              required: false,
              maxLength: {
                value: 50,
                message: "Не более 50 символов",
              },
              pattern: {
                value: emailRegExp,
                message: "Введите корректный адрес электронной почты",
              },
            })}
          />
          {errors.email && (
            <p role="alert" className="form__error-text">
              {errors.email?.message}
            </p>
          )}
        </label>

        <label className="form__input-lable">
          Комментарий
          <input
            className="form__input-field"
            placeholder="Начните печатать..."
            type="text"
            name="comments"
            {...register("comments", {
              required: false,
              maxLength: {
                value: 200,
                message: "Не более 200 символов",
              },
              pattern: {
                value: descriptionRegExp,
                message: "Допустимы только русские или английские буквы",
              },
            })}
          />
          {errors.comments && (
            <p role="alert" className="form__error-text">
              {errors.comments?.message}
            </p>
          )}
        </label>
      </div>

      <Captcha setIsCaptchaOk={setIsCaptchaOk} isCaptchaOk={isCaptchaOk} />

      <div className="form__agreement">
        <input
          className="form__agreement-checkbox"
          type="checkbox"
          name="form-checkbox"
          id="form-checkbox"
          required
          {...register("checked", {
            required: "Обязательное поле",
          })}
        />
        <label htmlFor="form-checkbox" className="form__agreement-lable">
          Нажимая кнопку, я принимаю условия{" "}
          <a className="form__agreement-link" href="/agreement">
            Пользовательского соглашения
          </a>{" "}
          и даю своё согласие на обработку моих персональных данных, в
          соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
          персональных данных».
        </label>
      </div>

      <button
        type="submit"
        className={`form__button ${
          (!isValid || !isCaptchaOk) && "form__button_disabled"
        } ${isBtnActive && isCaptchaOk && "form__button_active"} `}
        disabled={(!isValid || !isCaptchaOk) && "disabled"}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default Form;
