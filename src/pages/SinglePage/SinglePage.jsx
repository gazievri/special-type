import "./SinglePage.sass";
import { useParams } from "react-router-dom";
import getMask from "../../utils/getMask/getMask";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import ImageMasked from "../../components/ImageMasked/ImageMasked";
import { NotFound } from "../../components/NotFound/NotFound";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

const SinglePage = ({ dataCard, handleClickOpenModal, label }) => {
  const { id } = useParams();
  const card = dataCard.find((item) => item.id == id);
  const isMobile = useMediaQuery("(max-width: 830px)");

  const onClick = () => {
    handleClickOpenModal(card);
  };

  return (
    <>
      <GoBackButton label={label} />
      <section className="singlePage">
        {card ? (
          <div className="singlePage__block">
            <div className="singlePage__text-block">
              {!isMobile ? (
                <>
                  {" "}
                  <h2 className="singlePage__date">
                    {card.date
                      ? card.date.slice(0, 10).replace(/-/g, ".")
                      : ""}
                  </h2>
                  <h1 className="singlePage__user">
                    {card.name.toLocaleUpperCase()}
                  </h1>
                </>
              ) : (
                ""
              )}

              <p className="singlePage__text">{card.description}</p>
            </div>
            <div className="singlePage__image-container" onClick={onClick}>
              <ImageMasked item={card} />
            </div>
          </div>
        ) : (
          <NotFound />
        )}
        {getMask("review")}
      </section>
    </>
  );
};

export default SinglePage;
