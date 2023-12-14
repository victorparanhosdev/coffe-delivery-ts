import { PaymentContainer, Content, Aside, Section, PriceContent } from "./style";
import { Header } from "../../components/Header";
import { MapPinLine, CurrencyDollar, Bank, Money, CreditCard } from '@phosphor-icons/react'
import { useNavigate } from "react-router-dom";

import { CardSelected } from "../../components/CardSelected";
import { useCart } from "../../hooks/context";

export function Payment() {
    const navigate = useNavigate()
    const {items} = useCart()


    function handleSucess() {
        navigate("/order")

    }

    const prices = items.map(item => item.price);
    const quantities = items.map(item => item.quantity);
    const totalValue = prices.reduce((accumulator, price, index) => {
        const itemTotal = price * quantities[index];
        return accumulator + itemTotal;
    }, 0);
    
    const Delivery = 3.9
    const TotalValueWithDelivery = (totalValue + Delivery).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
 



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
                        {items && items.map(coffeSelected=> {
                            return <CardSelected key={coffeSelected.id} coffeSelecteds={coffeSelected}/>
                        })}
                  


                        <PriceContent>
                            <div>
                                <span>Total de itens</span>
                                <span>{totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>{Delivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>{TotalValueWithDelivery}</span>
                            </div>

                            <button onClick={handleSucess} type="button">Confirmar pedido</button>
                        </PriceContent>


                    </div>

                </Aside>
            </Content>

        </PaymentContainer>
    )
}