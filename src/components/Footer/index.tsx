import { Container, Copyright } from './styles'

import logo from '../../assets/images/logo.png'
import redesSociais from '../../assets/images/redes-sociais.png'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
    </div>
    <div>
      <img src={redesSociais} alt="redes sociais" />
    </div>
    <Copyright>
      <p> {currentYear} - &copy; e-food Todos os direitos reservados</p>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega e qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </Copyright>
  </Container>
)

export default Footer
