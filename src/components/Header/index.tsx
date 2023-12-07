import {HeaderContainer, Menu} from './style'
import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';
import {PropsDataInfo } from "../../components/Card";

interface PropsValueCart {
    valueCart?: PropsDataInfo[]
}

export function Header({valueCart}: PropsValueCart){
    return(
        <HeaderContainer>
            <nav>
                <NavLink to='/'><img src={Logo} alt="Logo Coffe" /></NavLink>

                <Menu>
                    <div><MapPin size={22} weight="fill" /><span>Porto Alegre, RS</span></div>
                    <NavLink to="/payment"><ShoppingCart size={22} weight="fill"/><span>{valueCart && valueCart.length ? valueCart.length : 0}</span></NavLink>
                </Menu>
                
            </nav>
        </HeaderContainer>
    )
}