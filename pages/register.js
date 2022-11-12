import styled from "styled-components";

export default function Register() {
  return (
    <Container>
      <form>
        <span>Registrarse</span>
        <input placeholder="Número de cedula" />
        <input placeholder="Número de carné" />
        <input placeholder="Nombre" />
        <input placeholder="Apellido1" />
        <input placeholder="Apellido2" />
        <input type="date" placeholder="Fecha de nacimiento" />
        <input placeholder="Correo electrónico" />
        <input placeholder="Correo institucional" />
        <input placeholder="Contraseña" />
        <LoginBtn primary onClick={() => router.push("/home")}>
          Registrarse
        </LoginBtn>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 650px;
  width: 600px;
  border-radius: 15px;
  background-color: white;
  padding-top: 1rem;
  margin: 1rem auto;
  border: 1px solid black;

  button,
  input {
    height: 2.5rem;
    width: 17rem;
    display: block;
    margin: 1rem auto;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 0.9rem;
  }

  span {
    display: block;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const LoginBtn = styled.button`
  margin: ${(props) =>
    props.primary ? "3rem auto 2rem auto" : "1rem auto 2rem auto"};
  background-color: ${(props) => (props.primary ? "#284bc1" : null)};
  border: 1.5px solid #284bc1;
  width: 15rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  color: ${(props) => (props.primary ? "white" : "#284bc1")};
  font-weight: bold;
`;
