import "./Review.sass";
import ImageMasked from "../ImageMasked/ImageMasked";
import { NavLink, useLocation } from "react-router-dom";

const Review = ({ dataReviews }) => {
  const { pathname } = useLocation();
  let reviews = dataReviews;
  if (pathname === "/") {
    reviews = dataReviews.slice(0, 3);
  } else if (pathname === "/reviews") {
    reviews = dataReviews.slice(0, 10);
  } else reviews = dataReviews.slice(0, 1);
  for (let i = 0; i < reviews.length; i++) {
    return (
      <>
        {reviews.map((item) => (
          <li className="review__card" key={item.id}>
            <p className="review__create-date">{item.date ? item.date.slice(0, 10).replace(/-/g, ".") : ''}</p>
            <h3 className="review__card-title">{item.name}</h3>
            <p className="review__text">{item.description}</p>
            <NavLink to={`/reviews/${item.id}`} className="review__button">
              читать дальше{" "}
            </NavLink>
            <ImageMasked item={item} lable="review" />
          </li>
        ))}
      </>
    );
  }
};

export default Review;
