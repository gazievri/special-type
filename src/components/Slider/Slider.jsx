import "./Slider.sass";
import { useEffect, useState } from "react";
import { changeUrl } from "../../utils/changeUrl";
import { getPlug } from "../../utils/getPlug";

const Slider = ({ data, isOpened }) => {
  const { images, name } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [img, setImg] = useState();

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex === 0 ? img?.length - 1 : activeIndex - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img?.length - 1 ? 0 : activeIndex + 1;

  const handleClickNext = () => {
    if (activeIndex === img?.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(img?.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    images && setImg(changeUrl(images));
    if (!images || images?.length === 0) {
      setImg(getPlug());
    } else {
      setImg(changeUrl(images));
    }
  }, [images]);

  // Обнуление индекса картинки при повторном открытии слайдера
  useEffect(() => {
    if (isOpened === false) setActiveIndex(0);
  }, [isOpened]);

  return (
    <div className="slider">
      {Array.isArray(img) ? (
        <>
          <button className="slider__prev-img-btn" onClick={handleClickPrev} />
          <div className="slider-container">
            <div className="slider-img slider-img-prev" key={prevImgIndex}>
              <img
                className="slider__single-img"
                src={img[prevImgIndex]?.image}
                alt={img[prevImgIndex]?.news}
              />
            </div>
            <div className="slider-img" key={activeIndex}>
              <img
                className="slider__single-img"
                src={img[activeIndex]?.image}
                alt={img[activeIndex]?.news}
              />
            </div>
            <div className="slider-img slider-img-next" key={nextImgIndex}>
              <img
                className="slider__single-img"
                src={img[nextImgIndex]?.image}
                alt={img[nextImgIndex]?.news}
              />
            </div>
          </div>
          <button className="slider__next-img-btn" onClick={handleClickNext} />
        </>
      ) : (
        <div className="slider-container">
          <img className="slider__single-img" src={img} alt={name} />
        </div>
      )}
    </div>
  );
};

export default Slider;
