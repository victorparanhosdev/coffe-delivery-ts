import {HeaderContainer, Menu} from './style'
import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export function Card(){
    return(
        <HeaderContainer>
            <nav>
                <img src={Logo} alt="Logo Coffe" />

                <Menu>
                    <div><MapPin size={22}weight="fill" /><span>Porto Alegre, RS</span></div>
                    <button type='button'><ShoppingCart size={22} weight="fill"/></button>
                </Menu>
                
            </nav>
        </HeaderContainer>
    )
}