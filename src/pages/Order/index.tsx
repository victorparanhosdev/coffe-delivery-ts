import { OrderContainer, Content, Details } from "./style";
import { Header } from "../../components/Header";
import CartSucess from "../../assets/Illustration.svg"
import {Timer, MapPinLine, CurrencyDollar} from '@phosphor-icons/react'
export function Order(){
    return(
        <OrderContainer>
            <Header />
            <Content>
                <section>
                    <div className="section-one">
                        <h1>Uhu! Pedido confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </div>

                    <Details>
                        <div><MapPinLine size={16}/><p>Entrega em Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS</p></div>
                        <div><Timer size={16}/><p>Previsão de entrega 20 min - 30 min</p></div>
                        <div><CurrencyDollar size={16}/><p>Pagamento na entrega Cartão de Crédito</p></div>
                        
                    </Details>

                </section>
                <img src={CartSucess} alt="" />
               
            </Content>
        
        
        </OrderContainer>
    )
}