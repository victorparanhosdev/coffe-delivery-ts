import { PaymentContainer, Content, Aside, Section, PriceContent } from "./style";
import { Header } from "../../components/Header";
import {MapPinLine, CurrencyDollar, Bank, Money, CreditCard} from '@phosphor-icons/react'
import { useNavigate } from "react-router-dom";
import { CardSelected } from '../../components/CardSelected'



export function Payment() {
    const navigate = useNavigate()



    function handleSucess(){
        navigate("/order")

    }

   
 
    return (
        <PaymentContainer>
            <Header />
            <Content>
                <Section>
                    <h1>Complete seu pedido</h1>

                    <div>
                        <div className="section-one">
                            <MapPinLine size={22} />
                            <div>
                                <h2>Endereço de Entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>

                        <form action="">
                            <input type="text" id="cep" name="cep" placeholder="CEP" />
                            <input type="text" id="rua" name="rua" placeholder="Rua" />

                            <div>
                                <input type="text" id="numero" name="numero" placeholder="Número" />
                                <input type="text" id="complemento" name="complemento" placeholder="Complemento" />
                            </div>
                            <div>
                                <input type="text" id="bairro" name="bairro" placeholder="Bairro" />
                                <input type="text" id="cidade" name="cidade" placeholder="Cidade" />
                                <input type="text" id="uf" name="uf" placeholder="UF" />
                            </div>

                        </form>

                    </div>

                    <div>
                        <div className="section-two">
                            <CurrencyDollar size={22} />
                            <div>
                                <h2>Pagamento</h2>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                            </div>
                        </div>


                        <div className="payment">
                            <button type="button"><CreditCard size={16} /> Cartão de Crédito</button>
                            <button type="button"><Bank size={16} />Cartão de Débito</button>
                            <button type="button"><Money size={16} />Dinheiro</button>
                        </div>

                    </div>




                </Section>

                <Aside>
                    <h1>Cafés selecionados</h1>
                    <div>
                    <CardSelected />

                        <PriceContent>
                            <div>
                                <span>Total de itens</span>
                                <span>R$29,90</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>R$3,90</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>R$39,90</span>
                            </div>

                            <button onClick={handleSucess} type="button">Confirmar pedido</button>
                        </PriceContent>


                    </div>

                </Aside>
            </Content>

        </PaymentContainer>
    )
}