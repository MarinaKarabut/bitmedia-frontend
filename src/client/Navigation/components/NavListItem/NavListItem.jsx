import { NavLink } from "react-router-dom";

import s from "./NavListItem.module.scss";

const NavListItem = ({to, text}) => {
    return (
        <li className={s.nav__link}>
            <NavLink  end to={to}  className = {({ isActive }) =>  isActive ? s.active  : s.nav__link__item }>{text}</NavLink>
        </li>
    )
}

export default NavListItem;

