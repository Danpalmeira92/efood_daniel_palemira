import { Link } from 'react-router-dom'

import { HeaderBar, TextoBanner } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
    </div>
    <TextoBanner>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </TextoBanner>
  </HeaderBar>
)

export default Header
