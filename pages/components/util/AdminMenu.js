import styled from "styled-components";
import Link from "next/link";

export default function AdminMenu(props) {
  return (
    <Sidebar>
      <ul>
        {!props.search ? <input placeholder="Search..." /> : null}
        <li>
          <Link href="/meal_manager">Gestor de alimentos</Link>
        </li>
        <li>
          <Link href="/user_manager">Gestor de usuarios</Link>
        </li>
        <li>
          <Link href="/">Exit</Link>
        </li>
      </ul>
    </Sidebar>
  );
}

const Sidebar = styled.div`
  padding-top: 4rem;
  grid-column: 1;
  grid-row: span 10;
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
    margin-left: 1rem;
    * {
      color: white;

      :hover {
        color: yellow;
      }
    }
    margin-bottom: 2rem;
    list-style: none;
  }
`;
