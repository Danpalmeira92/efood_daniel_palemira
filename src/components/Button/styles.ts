import styled from 'styled-components'

import { cores } from '../../styles'

export const ButtonLink = styled.a`
  border: 2px solid ${cores.salmon};
  background-color: ${cores.salmon};
  padding: 6px 10px;
  margin-bottom: 16px;
  border-radius: 8px;
  color: ${cores.cinza};
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
`
