import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

export const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/000000.png"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/000000.png"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/000000.png"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://dummyimage.com/222x250/cccccc/000000.png"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="nome do jogo"
        />
      </List>
    </div>
  </Container>
)
