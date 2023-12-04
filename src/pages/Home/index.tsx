import { HomeContainer, Content, SectionOne, SectionTwo, Card, Action } from "./style";
import { Header } from "../../components/Header";
import LogoCoffe from '../../assets/Coffe-Logo.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import Coffe from '../../assets/Café Gelado.svg'
export function Home() {
    return (
        <HomeContainer>
            <Header />

            <Content>

                <SectionOne>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                        <ul>
                            <li><ShoppingCart size={32} weight="fill" /><p>Compra simples e segura</p></li>
                            <li><Package size={32} weight="fill" /><p>Embalagem mantém o café intacto</p></li>
                            <li><Timer size={32} weight="fill" /><p>Entrega rápida e rastreada</p></li>
                            <li><Coffee size={32} weight="fill" /><p>O café chega fresquinho até você</p></li>
                        </ul>

                    </div>

                    <img src={LogoCoffe} alt="Logo Café" />

                </SectionOne>

                <SectionTwo>
                    <h1>Nossos Cafés</h1>

                    <div>

                        <Card>
                            <img src={Coffe} alt="" />
                            <div>
                                <span>Tradicional</span>
                            </div>

                            <h1>Expresso Tradicional</h1>
                            <label>o tradicional café feito com agua quente e graos móidos</label>

                            <Action>
                                <p>R$ <strong>90,00</strong> </p>

                                <div>
                                    <button type="button">-</button>
                                    <input type="text" readOnly disabled value={0} />
                                    <button type="button">+</button>

                                </div>

                                <button><ShoppingCart size={22} weight="fill" /></button>
                            </Action>

                        </Card>

                        <Card>
                            <img src={Coffe} alt="" />
                            <div>
                                <span>Tradicional</span>
                            </div>

                            <h1>Expresso Tradicional</h1>
                            <label>o tradicional café feito com agua quente e graos móidos</label>

                            <Action>
                                <p>R$ <strong>90,00</strong> </p>

                                <div>
                                    <button type="button">-</button>
                                    <input type="text" readOnly disabled value={0} />
                                    <button type="button">+</button>

                                </div>

                                <button><ShoppingCart size={22} weight="fill" /></button>
                            </Action>

                        </Card>


                        <Card>
                            <img src={Coffe} alt="" />
                            <div>
                                <span>Tradicional</span>
                            </div>

                            <h1>Expresso Tradicional</h1>
                            <label>o tradicional café feito com agua quente e graos móidos</label>

                            <Action>
                                <p>R$ <strong>90,00</strong> </p>

                                <div>
                                    <button type="button">-</button>
                                    <input type="text" readOnly disabled value={0} />
                                    <button type="button">+</button>

                                </div>

                                <button><ShoppingCart size={22} weight="fill" /></button>
                            </Action>

                        </Card>


                        <Card>
                            <img src={Coffe} alt="" />
                            <div>
                                <span>Tradicional</span>
                            </div>

                            <h1>Expresso Tradicional</h1>
                            <label>o tradicional café feito com agua quente e graos móidos</label>

                            <Action>
                                <p>R$ <strong>90,00</strong> </p>

                                <div>
                                    <button type="button">-</button>
                                    <input type="text" readOnly disabled value={0} />
                                    <button type="button">+</button>

                                </div>

                                <button><ShoppingCart size={22} weight="fill" /></button>
                            </Action>

                        </Card>


                        <Card>
                            <img src={Coffe} alt="" />
                            <div>
                                <span>Tradicional</span>
                            </div>

                            <h1>Expresso Tradicional</h1>
                            <label>o tradicional café feito com agua quente e graos móidos</label>

                            <Action>
                                <p>R$ <strong>90,00</strong> </p>

                                <div>
                                    <button type="button">-</button>
                                    <input type="text" readOnly disabled value={0} />
                                    <button type="button">+</button>

                                </div>

                                <button><ShoppingCart size={22} weight="fill" /></button>
                            </Action>

                        </Card>


                        <Card>
                            <img src={Coffe} alt="" />
                            <div>
                                <span>Tradicional</span>
                            </div>

                            <h1>Expresso Tradicional</h1>
                            <label>o tradicional café feito com agua quente e graos móidos</label>

                            <Action>
                                <p>R$ <strong>90,00</strong> </p>

                                <div>
                                    <button type="button">-</button>
                                    <input type="text" readOnly disabled value={0} />
                                    <button type="button">+</button>

                                </div>

                                <button><ShoppingCart size={22} weight="fill" /></button>
                            </Action>

                        </Card>








                    </div>

                </SectionTwo>
            </Content>

        </HomeContainer>
    )
}