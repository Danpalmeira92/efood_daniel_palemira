import { Estrela } from '../Avaliacao/styles'
import { ButtonLink } from '../Button/styles'

import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, LinhaTitulo } from './styles'

import estrela from '../../assets/images/estrela.png'

export type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  button: string
  showInfos?: boolean
  showEstrela?: boolean
  variant?: 'default' | 'categories'
}

const Product = ({
  title,
  description,
  infos,
  image,
  showInfos = true,
  showEstrela = true,
  variant = 'default'
}: Props) => (
  <Card variant={variant}>
    <img src={image} alt={title} />
    {showInfos && (
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    )}
    <LinhaTitulo variant={variant}>
      <Titulo variant={variant}>{title}</Titulo>
      {showEstrela && (
        <Estrela>
          4.6 <img src={estrela} alt="estrela" />
        </Estrela>
      )}
    </LinhaTitulo>

    <Descricao>{description}</Descricao>
    <ButtonLink to="/categories">Saiba mais</ButtonLink>
  </Card>
)

export default Product
