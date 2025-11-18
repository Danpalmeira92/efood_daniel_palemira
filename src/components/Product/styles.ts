import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Props } from './index'

export const Card = styled.div<{ variant?: Props['variant'] }>`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    border-radius: 6px;
  }
`

export const Titulo = styled.h3<{ variant?: Props['variant'] }>`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;

  ${(props) =>
    props.variant === 'categories' &&
    `
      color: ${cores.cinza};
      `}
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const LinhaTitulo = styled.div<{ variant?: Props['variant'] }>`
  display: flex;
  align-items: center;
  justify-content: space-between; /* controla o espaço */
  margin-top: 16px;
  margin-bottom: 8px;
`
