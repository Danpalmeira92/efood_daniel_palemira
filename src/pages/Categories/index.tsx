import { ProductsList } from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { ButtonLink } from '../../components/Button/styles'
import { Estrela } from '../../components/Avaliacao/styles'

const promocoes: Game[] = [
  {
    id: 1,

    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: resident,
    button: ButtonLink
  },
  {
    id: 2,

    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: diablo,
    button: ButtonLink
  },
  {
    id: 3,

    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: zelda,
    button: ButtonLink
  },
  {
    id: 4,

    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: starWars,
    button: ButtonLink
  },
  {
    id: 5,

    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: starWars,
    button: ButtonLink
  },
  {
    id: 6,

    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    avaliacao: Estrela,
    infos: ['-10%', 'R$ 250,00'],
    image: starWars,
    button: ButtonLink
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
  </>
)

export default Categories
