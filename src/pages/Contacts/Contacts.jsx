import "./Contacts.sass";
import contacts from "../../assets/images/contacts.png";

const Contacts = () => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">КОНТАКТЫ</h1>
      <img className="contacts__img" src={contacts} alt="" />

      <div className="contacts__main">
        <div className="contacts__text-block">
          <h2 className="contacts__subtitle">Адрес</h2>
          <address className="contacts__text">
            Россия, 633009, Новосибирская область, <br />
            г. Бердск, ул. Боровая, 111А, медицинский центр "Святитель Лука"
          </address>
        </div>

        <div className="contacts__text-block">
          <h2 className="contacts__subtitle">Телефон</h2>
          <a className="contacts__text" href="tel:+79612188417">
            +7-961-218-84-17
          </a>
        </div>

        <div className="contacts__text-block">
          <h2 className="contacts__subtitle">Эл. почта</h2>
          <a className="contacts__text" href="mailto:ostvolova@mail.ru">
            ostvolova@mail.ru
          </a>
        </div>

        <div className="contacts__text-block">
          <h2 className="contacts__subtitle">Для СМИ</h2>
          <p className="contacts__text">
            ostvolova@mail.ru <br />
            +7-961-218-84-17
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
