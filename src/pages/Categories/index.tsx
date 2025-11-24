import { ProductsList } from '../../components/ProductsList'
import Game from '../../models/Game'

import pizza from '../../assets/images/pizza.png'
import { ButtonLink } from '../../components/Button/styles'
import { Estrela } from '../../components/Avaliacao/styles'
import Header from '../../components/Header'
import { VariantBanner } from '../../components/Header/styles'

const promocoes: Game[] = [
  {
    id: 1,

    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: pizza,
    button: ButtonLink
  },
  {
    id: 2,

    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: pizza,
    button: ButtonLink
  },
  {
    id: 3,

    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: pizza,
    button: ButtonLink
  },
  {
    id: 4,

    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: pizza,
    button: ButtonLink
  },
  {
    id: 5,

    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: pizza,
    button: ButtonLink
  },
  {
    id: 6,

    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: pizza,
    button: ButtonLink
  }
]

const Categories = () => (
  <>
    <Header showTexto={false} variant={'categories'} />
    <VariantBanner />
    <ProductsList
      games={promocoes}
      title=""
      background="gray"
      showInfos={false}
      showEstrela={false}
      variant={'categories'}
    />
  </>
)

export default Categories
