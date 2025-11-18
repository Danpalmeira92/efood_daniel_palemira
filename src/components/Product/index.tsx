import { Estrela } from '../Avaliacao/styles'
import { ButtonLink } from '../Button/styles'

import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, LinhaTitulo } from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  button: string
}

const Product = ({
  title,

  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <LinhaTitulo>
      <Titulo>{title}</Titulo>
      <Estrela>
        4.6 <img src={estrela} alt="estrela" />
      </Estrela>
    </LinhaTitulo>

    <Descricao>{description}</Descricao>
    <ButtonLink to="/categories">Saiba mais</ButtonLink>
  </Card>
)

export default Product
