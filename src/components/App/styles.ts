import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TopNav = styled('nav')`
  background-color: palevioletred;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`

export const TopNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 1.5rem;
`
