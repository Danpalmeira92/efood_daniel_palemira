import styled from 'styled-components'
import { cores } from '../../styles'

import bgImage from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${bgImage});
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;
  padding: 24px 0;
`

export const TextoBanner = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
