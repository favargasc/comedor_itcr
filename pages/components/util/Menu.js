import styled from 'styled-components'
import Link from 'next/link'

export default function Menu (props) {
  return (
    <Sidebar>
      <ul>
        {(!props.search) ? <input placeholder='Search...' /> : null}
        <li>
          <Link href='/home'>Home</Link>
        </li>
        <li>
          <Link href='/shopping_cart'>Shopping Cart</Link>
        </li>
        <li>
          <Link href='/'>Exit</Link>
        </li>
      </ul>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  padding-top: 2rem;
  grid-column: 1;
  grid-row: span 3;
  background-color: #272822;


  input {
    height: 2rem;
    width: 12rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 1.5rem;
    border-radius: 10px;
  }

  li {
    * {
      color: white;

      :hover {
        color: yellow;
      }
    }
    margin-left: 2rem;
    margin-bottom: 1rem;
    list-style: none;
  }
`
