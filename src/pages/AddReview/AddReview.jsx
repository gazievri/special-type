import "./AddReview.sass";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import { useForm } from "react-hook-form";
import UpLoad from "../../components/UpLoad/UpLoad";
import { mainApi } from "../../utils/api/mainApi";
import { useState } from "react";
import { descriptionRegExp, fullNameRegExp } from "../../utils/regExp";

const AddReview = ({ setDataForResponsePopup }) => {
  const [imageUpload, setImageUpload] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const watchDescription = watch("description", 0);

  const onSubmit = (data) => {
    const formData = new FormData();

    if (imageUpload) {
      formData.append("images", imageUpload);
    }

    formData.append("name", data.name);
    formData.append("description", data.description);

    mainApi
      .postFeedback(formData)
      .then((res) => {
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
    <>
      <GoBackButton label="Отзывы / Добавить отзыв" />
      <section className="add-review">
        <form className="add-review__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="add-review__title">ДОБАВИТЬ ОТЗЫВ</h2>
          <div className="add-review__form-block">
            <label className="add-review__form-lable">
              ФИО
              <input
                className="add-review__input-name"
                placeholder="Введите"
                autoFocus={true}
                type="text"
                {...register("name", {
                  required: "Обязательное поле",
                  maxLength: {
                    value: 50,
                    message: "Не более 50 символов",
                  },
                  minLength: {
                    value: 2,
                    message: "Введите не менее 2 символов",
                  },
                  pattern: {
                    value: fullNameRegExp,
                    message: "Введите корректное значение",
                  },
                })}
              />
              {errors.name ? (
                <p role="alert" className="add-review__error-text">
                  {errors.name?.message}
                </p>
              ) : (
                <p role="alert" className="add-review__error-text_hidden">
                  1
                </p>
              )}
            </label>
            <label className="add-review__form-lable">
              Описание
              <textarea
                className="add-review__input-review"
                placeholder="Начните вводить..."
                {...register("description", {
                  required: "Обязательное поле",
                  maxLength: {
                    value: 500,
                    message: "Не более 500 символов",
                  },
                  minLength: {
                    value: 10,
                    message: "Введите не менее 10 символов",
                  },
                  pattern: {
                    value: descriptionRegExp,
                    message: "Допустимы только русские или английские буквы",
                  },
                })}
              />
              <div className="add-review__err-and-counter">
                {errors.description ? (
                  <p role="alert" className="add-review__error-text">
                    {errors.description?.message}
                  </p>
                ) : (
                  <p role="alert" className="add-review__error-text_hidden">
                    1
                  </p>
                )}
                <p className="add-review__symbols-counter">
                  <span
                    className={
                      watchDescription.length >= 10 &&
                      watchDescription.length <= 500
                        ? "add-review__count"
                        : "add-review__count_type_wrong"
                    }
                  >
                    {!watchDescription.length ? 0 : watchDescription.length}
                  </span>
                  /500
                </p>
              </div>
            </label>
            <UpLoad setImageUpload={setImageUpload} />
          </div>
          <button
            className={`add-review__form-submit ${
              !isValid && "add-review__form-submit_disabled"
            }`}
            type="submit"
            disabled={!isValid}
          >
            Отправить
          </button>
        </form>
      </section>
    </>
  );
};

export default AddReview;
