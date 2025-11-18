import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  showInfos?: boolean
  showEstrela?: boolean
  variant?: 'default' | 'categories'
}

export const ProductsList = ({
  background,
  title,
  games,
  showInfos = true,
  showEstrela = true,
  variant = 'default'
}: Props) => (
  <Container background={background} variant={variant}>
    <div className="container">
      <h2>{title}</h2>
      <List variant={variant}>
        {games.map((game) => (
          <Product
            key={game.id}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
            button={game.button}
            showInfos={showInfos}
            showEstrela={showEstrela}
            variant={variant}
          />
        ))}
      </List>
    </div>
  </Container>
)
