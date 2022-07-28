import Link from 'next/link';

import { User, ShoppingCart } from 'phosphor-react'

import { Container, Left, Right } from './styles';

export function Header() {
  return (
    <Container>
      <Left>
        <Link href='/'>
          <a>Estudai</a>
        </Link>
        <input type="text" placeholder="Pesquisar" />
      </Left>
      <Right>
        <Link href='/login'>
          <a>
            <User size={20} color="white" />
          </a>
        </Link>
        <Link href='#'>
          <a>
            <ShoppingCart size={20} color="white" />
          </a>
        </Link>
      </Right>
    </Container>
  )
}