import {HeaderContainer, Menu} from './style'
import Logo from '../../../public/assets/Logo.svg'
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/context';


export function Header(){

    const {items} = useCart()

    return(
        <HeaderContainer>
            <nav>
                <NavLink to='/'><img src={Logo} alt="Logo Coffe" /></NavLink>

                <Menu>
                    <div><MapPin size={22} weight="fill" /><span>Porto Alegre, RS</span></div>
                    <NavLink to="/payment"><ShoppingCart size={22} weight="fill"/><span>{items && items.length ? items.length : 0}</span></NavLink>
                </Menu>
                
            </nav>
        </HeaderContainer>
    )
}