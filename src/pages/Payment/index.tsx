import { PaymentContainer, Form, Aside, Section, PriceContent } from "./style";
import { Header } from "../../components/Header";
import { MapPinLine, CurrencyDollar, Bank, Money, CreditCard } from '@phosphor-icons/react'
//import { useNavigate } from "react-router-dom";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { CardSelected } from "../../components/CardSelected";
import { useCart} from "../../hooks/context";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { ActionTypes } from "../../reducers/actions";


const newOrderFormSchema = zod.object({
    CEP: zod.string(),//.min(2, 'Formato de CEP inválido. Use o formato 12345-678.'),
    Rua: zod.string(),
    Numero: zod.string(),  // Pode ser zod.number() se você quiser um número.
    Complemento: zod.string(),
    Bairro: zod.string(),
    Cidade: zod.string(),
    UF: zod.string(),//.min(2, 'O campo UF deve ter exatamente 2 caracteres.'),

  });
  
export type PropsOrderForm = zod.infer<typeof newOrderFormSchema>

export function Payment() {
    //const navigate = useNavigate()

    const [methodPayment, setmethodPayment] = useState<string | null>(null)

    const {register, handleSubmit, /*watch, /*formState: {errors}*/} = useForm<PropsOrderForm>({
        resolver: zodResolver(newOrderFormSchema),
        defaultValues: {
            Bairro: '',
            CEP: '',
            Cidade: '',
            Complemento: '',
            Numero: '',
            Rua: '',
            UF: '',

        }
    })


    const {items, dispatch} = useCart()

   
    
    function handleSucess(data: PropsOrderForm) {
        //navigate("/order")

 
        dispatch({
            type: ActionTypes.CART_CHECKOUT,
            payloads: {
                items: {id: '', description: '', price: 0, quantity: 0, tag: [], title: '', urlimg: ''},
                CartSelectedWithForm: {...data, MethodPayment: methodPayment, CartSelect: items }
            }
           
            
        })
        //console.log(data)

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
            <Form onSubmit={handleSubmit(handleSucess)}>
                <Section >
                    <h1>Complete seu pedido</h1>

                    <div>
                        <div className="section-one">
                            <MapPinLine size={22} />
                            <div>
                                <h2>Endereço de Entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>

                        <div className="inputForm">
                            <input {...register('CEP')} type="text" id="cep" placeholder="CEP" />
                            <input {...register('Rua')} type="text" id="rua" placeholder="Rua" />

                            <div>
                                <input {...register('Numero')} type="text" id="numero" placeholder="Número" />
                                <input {...register('Complemento')} type="text" id="complemento" placeholder="Complemento" />
                            </div>
                            <div>
                                <input {...register('Bairro')} type="text" id="bairro" placeholder="Bairro" />
                                <input {...register('Cidade')} type="text" id="cidade" placeholder="Cidade" />
                                <input {...register('UF')} type="text" id="uf" placeholder="UF" />
                            </div>

                        </div>

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
                            <button className={methodPayment === 'credit'? 'active': ''} onClick={e => setmethodPayment(e.currentTarget.name)} name="credit" type="button"><CreditCard size={16} /> Cartão de Crédito</button>
                            <button className={methodPayment === 'debit' ? 'active': ''} onClick={e => setmethodPayment(e.currentTarget.name)} name="debit" type="button"><Bank size={16} />Cartão de Débito</button>
                            <button className={methodPayment === 'money' ? 'active': ''} onClick={e => setmethodPayment(e.currentTarget.name)} name="money" type="button"><Money size={16} />Dinheiro</button>
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

                            <button type="submit">Confirmar pedido</button>
                        </PriceContent>


                    </div>

                </Aside>
            </Form>

        </PaymentContainer>
    )
}