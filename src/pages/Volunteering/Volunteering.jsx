import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import "./Volunteering.sass";
import Volonter from "../../assets/images/Volonter.png";
import FormVolunteering from "../../components/FormVolunteering/FormVolunteering";
import { useEffect } from 'react';

const Volunteering = ({setDataForResponsePopup}) => {
  // Прокручивание в верх элемента
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // Использование функции прокрутки в верх элемента
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <GoBackButton label="Как помочь/Стать волонтером" />
      <section className="volunteering">
        <div className="volunteering__container">
          <div className="volunteering__text-block">
            <img className="volunteering__img" src={Volonter} alt="Волонтеры" />
            <div className="volunteering__text-container">
              <p className="volunteering__text">
                Волонтер — это человек, который помогает безвозмездно и
                добровольно. Всем от этого становится хорошо. В обычной жизни у
                волонтеров есть семья, работа и немного свободного времени,
                которое он может потратить не только на отдых и развлечения, но
                и на помощь другим людям.
              </p>
              <p className="volunteering__text">
                Мы с благодарностью принимаем любую помощь.
              </p>
              <p className="volunteering__text">
                Стать волонтером проекта очень просто. Заполните анкету и в
                течение нескольких дней с вами свяжутся.
              </p>
            </div>
          </div>
          <FormVolunteering setDataForResponsePopup={setDataForResponsePopup } />
        </div>
      </section>
    </>
  );
};

export default Volunteering;
