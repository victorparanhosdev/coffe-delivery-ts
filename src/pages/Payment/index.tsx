import {Form, Aside, Section, PriceContent } from "./style";
import { Header } from "../../components/Header";
import { MapPinLine, CurrencyDollar, Bank, Money, CreditCard} from '@phosphor-icons/react'
import { useNavigate } from "react-router-dom";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardSelected } from "../../components/CardSelected";
import { useCart } from "../../hooks/context";
import { useForm } from 'react-hook-form';
import { ActionTypes } from "../../reducers/actions";


export type PropsMethodPayment = 'credit' | 'debit' | 'money' | null
export interface PropsOrderFormAll {
    CEP: string,
    Rua: string,
    Numero: string,
    Complemento: string,
    Cidade: string,
    Bairro: string,
    UF: string,
    methodPayment: PropsMethodPayment
}

const newOrderFormSchema = zod.object({
    CEP: zod.string().min(1, 'Informe o CEP').refine(value => /^\d{8}$/.test(value), 'Informe números válidos sem hífen'),
    Rua: zod.string().min(3, 'Informe a Rua'),
    Numero: zod.string().min(1, 'Informe o Número'),
    Complemento: zod.string(),
    Bairro: zod.string().min(3, 'Informe o Bairro'),
    Cidade: zod.string().min(3, 'Informe a Cidade'),
    UF: zod.string().refine(value => value.length === 2, '2 dígitos para a UF'),
    methodPayment: zod.enum(['credit', 'debit', 'money'], {
        invalid_type_error: 'Informe um método de pagamento',
      }),
  });


export function Payment() {
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<PropsOrderFormAll>({
        resolver: zodResolver(newOrderFormSchema),
        defaultValues: {
            Bairro: '',
            CEP: '',
            Cidade: '',
            Complemento: '',
            Numero: '',
            Rua: '',
            UF: '',
            methodPayment: null


        }
    })



    const { items, dispatch } = useCart()


    const selectedPaymentMethod = watch("methodPayment")

    function handleSucess(data: PropsOrderFormAll) {
        if (items.length === 0) {
            return alert('É preciso ter pelo menos um item no carrinho')
        }

        dispatch({
            type: ActionTypes.CART_CHECKOUT,
            payloads: {
                items: { id: '', description: '', price: 0, quantity: 0, tag: [], title: '', urlimg: '' },
                CartSelectedWithForm: { ...data, methodPayment: selectedPaymentMethod, CartSelect: items }
            }
        })


        navigate("/order")
        reset()



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
        <>
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
                            <div><input {...register('CEP')} type="text" id="cep" placeholder="CEP" />{errors?.CEP && <span>{errors.CEP.message}</span>} </div>
                            <div><input {...register('Rua')} type="text" id="rua" placeholder="Rua" />{errors?.Rua && <span>{errors.Rua.message}</span>} </div>
                            <div><input {...register('Numero')} type="text" id="numero" placeholder="Número" />{errors?.Numero && <span>{errors.Numero.message}</span>} </div>
                            <div><input {...register('Complemento')} type="text" id="complemento" placeholder="Complemento" /><i>Opcional</i> </div>
                            <div><input {...register('Bairro')} type="text" id="bairro" placeholder="Bairro" />{errors?.Bairro && <span>{errors.Bairro.message}</span>} </div>
                            <div><input {...register('Cidade')} type="text" id="cidade" placeholder="Cidade" />{errors?.Cidade && <span>{errors.Cidade.message}</span>} </div>
                            <div><input {...register('UF')} type="text" id="uf" placeholder="UF" />{errors?.UF && <span>{errors.UF.message}</span>} </div>
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


                            <label className={selectedPaymentMethod === 'credit' ? 'active' : ''} htmlFor="credicard"><input value='credit' type="radio" {...register('methodPayment')} id="credicard" /><CreditCard size={16} />Cartão de Crédito</label>
                            <label className={selectedPaymentMethod === 'debit' ? 'active' : ''} htmlFor="debitcard"><input value='debit' type="radio" {...register('methodPayment')} id="debitcard" /><Bank size={16} />Cartão de Débito</label>
                            <label className={selectedPaymentMethod === 'money' ? 'active' : ''} htmlFor="money"><input value='money' type="radio" {...register('methodPayment')} id="money" /><Money size={16} />Dinheiro</label>


                        </div>
                        {errors?.methodPayment && <span>{errors.methodPayment.message}</span>}
                    </div>




                </Section>

                <Aside>
                    <h1>Cafés selecionados</h1>
                    <div>
                        {items && items.map(coffeSelected => {
                            return <CardSelected key={coffeSelected.id} coffeSelecteds={coffeSelected} />
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

        </>
    )
}