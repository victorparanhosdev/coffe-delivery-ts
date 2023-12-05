import { SectionOne, SectionTwo} from "./style";
import { Header } from "../../components/Header";
import LogoCoffe from '../../assets/Coffe-Logo.svg'
import { ShoppingCart, Timer, Package, Coffee} from '@phosphor-icons/react'
import { Card } from "../../components/Card";


const DataCoffeeInfo = [
    {
      id: String(new Date().getTime()),
      urlimg: 'Café Gelado.svg',
      tag: ['Tag1', 'Tag2'],
      title: 'Title1',
      description: 'O tradicional tradicional tradicionaltradicional café feito com água quente e grãos moídos',
      price: 9.99,
    },
    {
      id: String(new Date().getTime() + 1) ,
      urlimg: 'Americano.svg',
      tag: ['Tag1', 'Tag2'],
      title: 'Title2',
      description: 'Description2',
      price: 15.99,
    },
    {
      id: String(new Date().getTime() + 6),
      urlimg: 'Capuccino.svg',
      tag: ['Tag1', 'Tag2'],
      title: 'Title10',
      description: 'Description10',
      price: 29.99,
    },
    {
        id: String(new Date().getTime() + 5),
        urlimg: 'Capuccino.svg',
        tag: ['Tag1', 'Tag2'],
        title: 'Title10',
        description: 'Description10',
        price: 29.99,
      },
      {
        id: String(new Date().getTime() + 4),
        urlimg: 'Capuccino.svg',
        tag: ['Tag1', 'Tag2'],
        title: 'Title10',
        description: 'Description10',
        price: 29.99,
      },
      {
        id: String(new Date().getTime() + 3),
        urlimg: 'Capuccino.svg',
        tag: ['Tag1', 'Tag2'],
        title: 'Title10',
        description: 'Description10',
        price: 29.99,
      },
      {
        id: String(new Date().getTime() + 2),
        urlimg: 'Capuccino.svg',
        tag: ['Tag1', 'Tag2', 'tag3', 'Tag1', 'Tag2', 'tag3'],
        title: 'Title10',
        description: 'Description10',
        price: 29.99,
      },

  ];

export function Home() {


    return (
        <div>
            <Header />
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
                                <Card key={String(data.id)} datainfo={data}/>
                            )
                        })}
                  
                    </div>

                </SectionTwo>
            </main>

        </div>
    )
}