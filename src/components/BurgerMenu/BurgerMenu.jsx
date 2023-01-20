import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./BurgerMenu.sass";
const BurgerMenu = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  let location = useLocation()

  function handleOpenBurger() {
    if (!isBurgerOpen) {
      setBurgerOpen(true);
    } else if (isBurgerOpen) {
      setBurgerOpen(false);
    }
  }

  function handleCloseBurger() {
    setBurgerOpen(false);
  }

  useEffect(() => {
    setBurgerOpen(false)
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener("scroll", handleCloseBurger);
  }, []);

  return (
    <>
      <button className="BurgerButton" onClick={handleOpenBurger}></button>
      <div className={isBurgerOpen ? "burger burger_opened" : "burger"}>
        <div className="burger__container">
          <Navigation setBurgerOpen={setBurgerOpen} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
