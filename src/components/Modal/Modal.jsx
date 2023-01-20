import "./Modal.sass";
import Slider from "../Slider/Slider";

const Modal = ({ isOpened, handleClickOpenModal, dataForModal }) => {
  const onClickClose = () => {
    handleClickOpenModal();
  };

  return (
    <div className={`modal ${isOpened && "modal_status_opened"}`}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClickClose} />
        <Slider data={dataForModal} isOpened={isOpened} />
      </div>
    </div>
  );
};

export default Modal;
