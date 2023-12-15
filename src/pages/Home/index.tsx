import { SectionOne, SectionTwo } from "./style";
import { Header } from "../../components/Header";
import LogoCoffe from '../../../public/assets/Coffe-Logo.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { Card } from "../../components/Card";
import { useCart } from "../../hooks/context";




export function Home() {
  const {coffees} = useCart()

  return (
    <div>
      <Header/>
      <main>
        <SectionOne>
          <div >
            <div >
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
          </div>
        </SectionOne>

        <SectionTwo>
          <h1>Nossos Cafés</h1>

          <div>
            {coffees.length > 0 && coffees.map(data => {
              return (
                <Card key={String(data.id)} datainfo={data} />
              )
            })}

          </div>

        </SectionTwo>
      </main>

    </div>
  )
}