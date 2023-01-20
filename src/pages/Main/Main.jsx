import "./Main.sass";
import About from "../../components/About/About";
import NewsCard from "../../components/NewsCard/NewsCard";
import Review from "../../components/Review/Review";

const Main = ({ newsData, dataReviews }) => {
  return (
    <div className="main">
      <About />
      <section className="main__section">
        <h2 className="main__title">новости</h2>
        <div className="main__content">
          <NewsCard newsData={newsData} />
        </div>
      </section>
      <section className="main__section">
        <h2 className="main__title">отзывы</h2>
        <div className="main__content">
          <Review dataReviews={dataReviews} />
        </div>
      </section>
    </div>
  );
};

export default Main;
