import "./Header.sass";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 1000
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <header className="header">
      <div className="header__info-block">
        <div className="header__logo" onClick={() => navigate("/")}></div>
        <nav className="header__nav-menu">
          {isDesktop ? (
            <>
              <Navigation />
              <Button title="Помочь" width="147px" route="/help" />{" "}
            </>
          ) : (
            <>
              {" "}
              <Button title="Помочь" width="100px" route="/help" />{" "}
              <BurgerMenu />{" "}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
