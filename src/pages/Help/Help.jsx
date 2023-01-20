import '../../styles/@global.sass';
import '../../styles/@mixins.sass';
import './Help.sass'
import Button from '../../components/Button/Button';
import Pay from "../../assets/images/Pay.png";
import Volonter from "../../assets/images/Volonter.png";
import PayForm from '../../components/PayForm/PayForm';
import useMediaQuery from "../../utils/hooks/useMediaQuery";

const Help = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  return (
    <section className='help'>
      <h1 className='help__title'>
        Как помочь проекту?
      </h1>
      <div className='help__intro-container'>
        <div className='help__left-intro-container'>
          <p className='help__left-intro-desqr'>
            Мы делаем все, чтобы помогать было легко и удобно. Каждый может выбрать то, что подходит ему больше всего.
          </p>
        </div>
        <div className='help__right-intro-container'>
            <span className='help__right-intro-quote'> &#8222; Не упускайте случая делать добро. &#8220;</span>
            <span className='help__right-intro-author'>Марк Твен</span>
        </div>
      </div>
      <ul className='help__list'>
        <li className='help__method'>
          <h3 className='help__item-title'>Сделать пожертвование</h3>
          <p className='help__item-descr'>Вы можете внести пожертвование любым способом - все средства идут на развите нашего проекта.</p>
          <img className='help__item-img' src={Pay} alt="Пожертвования" />
          <Button
          title='Помочь'
          width={isDesktop ? '287px' : '100px'}
          route ='/payment'
          />
        </li>
        <li className='help__method'>
          <h3 className='help__item-title'>Стать волонтером</h3>
          <p className='help__item-descr'>Вы можете внести пожертвование любым способом - все средства идут на развите нашего проекта.</p>
          <img className='help__item-img' src={Volonter} alt="Волонтеры"/>
          <Button title='Помочь' width={isDesktop ? '287px' : '100px'} route ='/help/volunteering'/>
        </li>
      </ul>
  </section>
  )

}

export default Help