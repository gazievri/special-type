import "./Navigation.sass";
import { NavLink } from "react-router-dom";

const Navigation = ({setBurgerOpen}) => {
  return (
    <div className="navigation__container">
      <NavLink
        to="/schedule"
        // onClick={() => setBurgerOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "header__nav-link header__nav-link_active"
            : "header__nav-link"
        }
      >
        Расписание
      </NavLink>
      <NavLink
        to="/posters"
        // onClick={() => setBurgerOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "header__nav-link header__nav-link_active"
            : "header__nav-link"
        }
      >
        Афиша
      </NavLink>
      <NavLink
        to="/news"
        // onClick={() => setBurgerOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "header__nav-link header__nav-link_active"
            : "header__nav-link"
        }
      >
        Новости
      </NavLink>
      <NavLink
        to="/friends"
        // onClick={() => setBurgerOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "header__nav-link header__nav-link_active"
            : "header__nav-link"
        }
      >
        Друзья
      </NavLink>
      <NavLink
        to="/reviews"
        // onClick={() => setBurgerOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "header__nav-link header__nav-link_active"
            : "header__nav-link"
        }
      >
        Отзывы
      </NavLink>
      <NavLink
        to="/contacts"
        // onClick={() => setBurgerOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "header__nav-link header__nav-link_active"
            : "header__nav-link"
        }
      >
        Контакты
      </NavLink>
    </div>
  );
};

export default Navigation;
