import "./ScheduleItem.sass";
import { useNavigate } from 'react-router-dom';
import ImageMasked from '../ImageMasked/ImageMasked';

const ScheduleItem = ({ scheduleData, setItemForRegistration }) => {
  const navigate = useNavigate();
  const handleOnCLick = (data) => {
    setItemForRegistration(data);
    navigate(`/registration/${data.id}`);
  }

  for (let i = 0; i < scheduleData.length; i++) {
    return (
      <>
        {scheduleData.map((event) => (
          <li className="scedule__item" key={event.id} onClick={() => handleOnCLick(event)}>
            <ImageMasked item={event} lable="schedule" />
            <h3 className="schedule__schedule-item">{event.name}</h3>
            <h5 className="schedule__item-address-head">Адрес проведения</h5>
            <address className="schedule_item-address">{event.address}</address>
            <h5 className="schedule__item-time-head">Время проведения</h5>
            <span className="schedule__item-time">{event.date ? event.date.slice(0, 10).replace(/-/g, ".") : ''} в {event.date ? event.date.slice(11, 16).replace(/:/g, "–") : ''}</span>
          </li>
        ))}
      </>
    );
  }
};

export default ScheduleItem;
