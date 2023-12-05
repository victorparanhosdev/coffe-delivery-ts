import {HeaderContainer, Menu} from './style'
import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';

export function Header(){
    return(
        <HeaderContainer>
            <nav>
                <NavLink to='/'><img src={Logo} alt="Logo Coffe" /></NavLink>

                <Menu>
                    <div><MapPin size={22} weight="fill" /><span>Porto Alegre, RS</span></div>
                    <button type='button'><ShoppingCart size={22} weight="fill"/><span>1</span></button>
                </Menu>
                
            </nav>
        </HeaderContainer>
    )
}