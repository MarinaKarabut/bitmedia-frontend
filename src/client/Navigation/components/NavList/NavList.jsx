import {v4} from 'uuid'

import NavListItem from "../NavListItem";
import {menuItems} from "./menuItems";

import s from "./NavList.module.scss";

const NavList =()=> {
     const navbarMenuElements = menuItems.map(item => <NavListItem key={v4() }{...item} />)

    return (
        <ul className={s.nav}>
            {navbarMenuElements}
        </ul>
    )
};

export default NavList;