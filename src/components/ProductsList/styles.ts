import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'pratos'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${cores.cinza};
    border: 1px solid;
  }

  ${(props) =>
    props.variant === 'categories' &&
    `
    ${Card} {
    background-color: ${cores.salmon};
    border: 1px solid;
    color: ${cores.cinza};
  }
  `}
`

export const List = styled.ul<{ variant?: Props['variant'] }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  row-gap: 40px;
  margin-top: 40px;
  margin-bottom: 64px;

  ${(props) =>
    props.variant === 'categories' &&
    `
      grid-template-columns: repeat(3, 1fr);
      column-gap: 24px;
      row-gap: 24px;
      margin-bottom: 64px;
      margin-top: 8px;
      `}
`

export const Title = styled.h2<{ variant?: Props['variant'] }>`
  font-size: 18px;
  font-weight: bold;
`
