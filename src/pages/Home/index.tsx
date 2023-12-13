import { SectionOne, SectionTwo } from "./style";
import { Header } from "../../components/Header";
import LogoCoffe from '../../assets/Coffe-Logo.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { Card } from "../../components/Card";
import CafeGelado from '../../assets/Café Gelado.svg'
import Americano from '../../assets/Americano.svg'
import CafeComLeite from '../../assets/Café com Leite.svg'
import Capuccino from '../../assets/Capuccino.svg'
import Cubano from '../../assets/Cubano.svg'
import ExpressoCremoso from '../../assets/Expresso Cremoso.svg'
import Havaiano from '../../assets/Havaiano.svg'




const DataCoffeeInfo = [
  {
    id:String(1),
    urlimg: CafeGelado,
    tag: ['Tradicional', 'Tag2'],
    title: 'Title1',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
  },
  {
    id: String(2),
    urlimg: Americano,
    tag: ['Tag1', 'Tag2'],
    title: 'Title2',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 15.99,
  },
  {
    id: String(3),
    urlimg: CafeComLeite,
    tag: ['Tag1', 'Tag2'],
    title: 'Title10',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 29.99,
  },
  {
    id: String(4),
    urlimg: Capuccino,
    tag: ['Tag1', 'Tag2'],
    title: 'Title10',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 29.99,
  },
  {
    id: String(5),
    urlimg: Cubano,
    tag: ['Tag1', 'Tag2'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 29.99,
  },
  {
    id: String(6),
    urlimg: Havaiano,
    tag: ['Tag1', 'Tag2'],
    title: 'Title10',
    description: 'Description10',
    price: 29.99,
  },
  {
    id: String(7),
    urlimg: ExpressoCremoso,
    tag: ['Tag1', 'Tag2', 'tag3', 'Tag1', 'Tag2', 'tag3'],
    title: 'Title10',
    description: 'Description10',
    price: 29.99,
  }
]


export function Home() {

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
            {DataCoffeeInfo.length > 0 && DataCoffeeInfo.map(data => {
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