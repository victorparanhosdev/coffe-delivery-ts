import {Content, Details } from "./style";
import { Header } from "../../components/Header";
import { useCart } from "../../hooks/context";
import {Timer, MapPinLine, CurrencyDollar} from '@phosphor-icons/react'


export function Order(){

    const {CartSelectedWithForm} = useCart()

    const MethodPagament = CartSelectedWithForm?.methodPayment
    let paymentMethodString = "";
    
    switch (MethodPagament) {
        case 'credit':
          paymentMethodString = "Cartão de Crédito";
          break;
        case 'debit':
          paymentMethodString = "Cartão de Débito";
          break;
        case 'money':
          paymentMethodString = "Pagamento em dinheiro";
          break;
        default:
          paymentMethodString = "Método de pagamento desconhecido";
      }

    return(
        <>
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
                            <p>Entrega em <strong>{CartSelectedWithForm?.Rua}, {CartSelectedWithForm?.Numero}</strong><br />{CartSelectedWithForm?.Bairro} - {CartSelectedWithForm?.Cidade}, {CartSelectedWithForm?.UF}</p>
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
                        <p>Pagamento na entrega<br /><strong>{paymentMethodString}</strong></p>
                        </div>
                        
                    </Details>

                </section>
                <img src='/assets/Illustration.svg' alt="" />
               
            </Content>
        
        
        </>
    )
}