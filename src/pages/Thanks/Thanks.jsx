import "./Thanks.sass";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Thanks = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/");
    }, 10000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="thanks">
      <div className="thanks-cover">
        <div className="thanks-cover__text">
          <h1 className="thanks-cover__title">спасибо за помощь!</h1>
          <p className="thanks-cover__desctiption">
            Через 10 секунд Вы вернётесь на главную страницу...
          </p>
        </div>
      </div>
    </div>
  );
};
