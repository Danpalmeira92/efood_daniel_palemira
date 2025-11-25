import { ProductsList } from '../../components/ProductsList'
import Prato from '../../models/Pratos'

import pratos from '../../assets/images/pratos.png'
import { ButtonLink } from '../../components/Button/styles'
import { Estrela } from '../../components/Avaliacao/styles'
import Header from '../../components/Header'

const cardapio: Prato[] = [
  {
    id: 1,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    avaliacao: Estrela,
    infos: ['Italiana'],
    image: pratos,
    button: ButtonLink
  },
  {
    id: 2,

    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    avaliacao: Estrela,
    infos: ['Italiana'],
    image: pratos,
    button: ButtonLink
  },
  {
    id: 3,

    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    avaliacao: Estrela,
    infos: ['Italiana'],
    image: pratos,
    button: ButtonLink
  },
  {
    id: 4,

    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    avaliacao: Estrela,
    infos: ['Italiana'],
    image: pratos,
    button: ButtonLink
  },
  {
    id: 5,

    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    avaliacao: Estrela,
    infos: ['Italiana'],
    image: pratos,
    button: ButtonLink
  },
  {
    id: 6,

    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    avaliacao: Estrela,
    infos: ['Italiana'],
    image: pratos,
    button: ButtonLink
  }
]

const Home = () => (
  <>
    <Header showTexto={true} />
    <ProductsList pratos={cardapio} title="" background="gray" />
  </>
)

export default Home
