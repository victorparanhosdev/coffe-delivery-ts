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
                        <div>
                            <span>
                                <MapPinLine weight="fill" size={16}/>
                            </span>
                            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br />Farrapos - Porto Alegre, RS</p>
                        </div>

                        <div>
                            <span>
                                <Timer weight="fill" size={16}/>
                            </span>
                            <p>Previsão de entrega <br /><strong>20 min - 30 min</strong></p>
                        </div>

                        <div>
                            <span>
                                <CurrencyDollar size={16}/>
                            </span>
                        <p>Pagamento na entrega<br /><strong>Cartão de Crédito</strong></p>
                        </div>
                        
                    </Details>

                </section>
                <img src={CartSucess} alt="" />
               
            </Content>
        
        
        </OrderContainer>
    )
}