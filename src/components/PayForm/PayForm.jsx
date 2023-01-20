import "./PayForm.sass";
import { useForm } from 'react-hook-form';
import Button from "../Button/Button";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

const PayForm = () => {
    const {
        register,
        // handleSubmit,
        formState: { errors, /*isValid*/ },
      } = useForm({
        mode: "all",
      });

    const isDesktop = useMediaQuery("(min-width: 767px)");

      // const onSubmit = (data) => {
      //   alert(JSON.stringify(data));
      // };

    return (
        <div className="payment__wrapper">
            <div className="payment__card transfer-wrapper">
                <form className="payment__money-transfer">
                    <h3 className="payment__title">Помочь переводом</h3>
                    <ul className="payment__input_list">
                        <li className="payment__input_item">
                            <label className="payment__input-lable">Имя</label>
                            <input className="payment__input-field"
                                placeholder="Введите"
                                type="text"
                                name="firstName"
                                {...register("firstName", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 30,
                                    message: "Не более 30 символов",
                                },
                                pattern: {
                                    value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                                    message: "Допустимы только русские или английские буквы",
                                },
                                })}
                                aria-invalid={errors.firstName ? "true" : "false"}
                            />
                            {errors.firstName && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.firstName?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item">
                            <label className="payment__input-lable">Фамилия</label>
                            <input className="payment__input-field"
                                placeholder="Введите"
                                type="text"
                                name="lastName"
                                {...register("lastName", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 30,
                                    message: "Не более 30 символов",
                                },
                                pattern: {
                                    value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                                    message: "Допустимы только русские или английские буквы",
                                },
                                })}
                                aria-invalid={errors.lastName ? "true" : "false"}
                            />
                            {errors.lastName && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.lastName?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item">
                            <label className="payment__input-lable">Телефон</label>
                            <input className="payment__input-field"
                                placeholder="Введите"
                                type="tel"
                                name="phoneNumber"
                                {...register("phoneNumber", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 12,
                                    message: "Не более 12 символов",
                                },
                                pattern: {
                                    value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                                    message: "Введите корректный номер телефона",
                                },
                                })}
                                aria-invalid={errors.phoneNumber ? "true" : "false"}
                            />
                            {errors.phoneNumber && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.phoneNumber?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item">
                            <label className="payment__input-lable">Электронная почта</label>
                            <input className="payment__input-field"
                                placeholder="Введите"
                                type="email"
                                name="email"
                                {...register("email", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 50,
                                    message: "Не более 50 символов",
                                },
                                pattern: {
                                    value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                                    message: "Введите корректный адрес электронной почты",
                                },
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.email?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item">
                            <label className="payment__input-lable">Сумма</label>
                            <input className="payment__input-field"
                                placeholder="Введите"
                                type="number"
                                name="summ"
                                {...register("summ", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 10,
                                    message: "Не более 10 символов",
                                },
                                pattern: {
                                    value: /\d/,
                                    message: "Введите корректную сумму перевода",
                                },
                                })}
                                aria-invalid={errors.summ ? "true" : "false"}
                            />
                            {errors.summ && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.summ?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item">
                        <label className="payment__input-lable">Тип перевода</label>
                            <select className="payment__input-field payment__select" name="payment" id="payment-type">
                                <option value="choice" selected>Выберите</option>
                                <option value="choice">QIWI</option>
                                <option value="choice">BTC</option>
                            </select>
                        </li>
                    </ul>
                    <div className="payment__checkbox-wrapper">
                        <label className="check-label one-check" htmlFor="one-time">Разово
                            <input className="check" type="checkbox" id="one-time" />
                            <span className="check-decor-span"></span>
                        </label>
                        <label className="check-label" htmlFor="one-month">Ежемесячно
                            <input className="check" type="checkbox" id="one-month" />
                            <span className="check-decor-span"></span>
                        </label>
                    </div>
                    <div className="payment__comment-wrapper">
                        <label className="payment__label"  htmlFor="payment-comment">Комментарий</label>
                        <textarea className="payment__comment" name="comment" id="payment-comment"
                            placeholder="Начните печатать...">
                        </textarea>
                    </div>
                    {isDesktop ? (<><Button title="Сделать перевод" width="281px" route="/help" />{" "}</>) : (<>{" "}<Button title="Сделать перевод" width="225px" route="/help" />{" "}</>)}
                </form>
            </div>
            <div className="payment__card card-pay-wrapper">
                <form className="payment__card-pay">
                    <div>
                    <h3 className="payment__title">Оплатить картой</h3>
                    <ul className="payment__input_list">
                        <li className="payment__input_item long-input">
                            <label className="payment__input-lable">Имя владельца</label>
                            <input className="payment__input-field long-input"
                                placeholder="Введите"
                                type="text"
                                name="cardName"
                                {...register("cardName", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 50,
                                    message: "Не более 50 символов",
                                },
                                pattern: {
                                    value: /^([a-z\s]+)$/iu,
                                    message: "Допустимы только английские буквы",
                                },
                                })}
                                aria-invalid={errors.cardName ? "true" : "false"}
                            />
                            {errors.cardName && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.cardName?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item long-input">
                            <label className="payment__input-lable">Номер карты</label>
                            <input className="payment__input-field long-input"
                                placeholder="Введите"
                                type="number"
                                name="cardNumber"
                                {...register("cardNumber", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 16,
                                    message: "16 цифр",
                                },
                                pattern: {
                                    value: /\d/,
                                    message: "Допустимы только цифры",
                                },
                                })}
                                aria-invalid={errors.cardNumber ? "true" : "false"}
                            />
                            {errors.cardNumber && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.cardNumber?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item validity-input">
                            <label className="payment__input-lable">Срок действия</label>
                            <input className="payment__input-field validity-input"
                                placeholder="Введите"
                                type="text"
                                name="validity"
                                {...register("validity", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 5,
                                    message: "xx/xx",
                                },
                                pattern: {
                                    value: /\d\d[/]\d\d/,
                                    message: "Укажите в формате 'xx/xx'",
                                },
                                })}
                                aria-invalid={errors.validity ? "true" : "false"}
                            />
                            {errors.validity && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.validity?.message}
                                </p>
                            )}
                        </li>
                        <li className="payment__input_item CVC-input">
                            <label className="payment__input-lable">CVC-код</label>
                            <input className="payment__input-field CVC-input"
                                placeholder="Введите"
                                type="text"
                                name="CVC"
                                {...register("CVC", {
                                required: "Обязательное поле",
                                maxLength: {
                                    value: 3,
                                    message: "xxx",
                                },
                                pattern: {
                                    value: /\d\d\d/,
                                    message: "Укажите в формате 'xxx'",
                                },
                                })}
                                aria-invalid={errors.CVC ? "true" : "false"}
                            />
                            {errors.CVC && (
                                <p role="alert" className="payment__input__error-text">
                                {errors.CVC?.message}
                                </p>
                            )}
                        </li>
                    </ul>
                    </div>
                    {isDesktop ? (<><Button title="Перейти к оплате" width="281px" route="/help" />{" "}</>) : (<>{" "}<Button title="Перейти к оплате" width="225px" route="/help" />{" "}</>)}
                </form>
            </div>
        </div>
    )
}
export default PayForm;