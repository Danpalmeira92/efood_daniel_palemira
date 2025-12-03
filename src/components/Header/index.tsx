import { Link } from 'react-router-dom'

import {
  HeaderBar,
  TextoBanner,
  VariantBanner,
  VariantHeaderTexto,
  TituloBanner,
  TituloRestauranrte
} from './styles'

import logo from '../../assets/images/logo.png'

export type Props = {
  showTexto?: boolean
  variant?: 'default' | 'categories'
}

const Header = ({ showTexto = true, variant = 'default' }: Props) => (
  <>
    <HeaderBar variant={variant}>
      {variant === 'categories' ? (
        <VariantHeaderTexto>
          <h4>Restaurantes</h4>

          <Link to="/" className="logo">
            <img src={logo} alt="Efood" />
          </Link>

          <h4>0 produto(s) no carrinho</h4>
        </VariantHeaderTexto>
      ) : (
        <>
          <div>
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
          </div>

          {showTexto && (
            <TextoBanner>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </TextoBanner>
          )}
        </>
      )}
    </HeaderBar>

    {variant === 'categories' && (
      <VariantBanner>
        <div className="container">
          <TituloBanner>Italiana</TituloBanner>
          <TituloRestauranrte>La Dolce Vita Trattoria</TituloRestauranrte>
        </div>
      </VariantBanner>
    )}
  </>
)

export default Header
