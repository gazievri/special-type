import './NotFound.sass'
import { useNavigate } from 'react-router-dom'
import notFound from '../../assets/images/NotFound.png'

export const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='notFound'>
      <img src={notFound} alt="" className='notFound__img'/>
      <h1 className='notFound__title'>Что-то пошло не так...</h1>
      <div className="notFound__buttons">
      <button className='notFound__button' onClick={() => navigate('/')}>Вернуться на главную</button>
      <button className='notFound__button' onClick={() => navigate('/help')}>Помочь</button>
      </div>
      
    </div>)
}