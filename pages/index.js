import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const gotoHome = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  const gotoAdmin = (e) => {
    e.preventDefault();
    router.push("/meal_manager");
  };

  return (
    <Wrapper>
      <Image
        src="/itcr.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt=""
        style={{ filter: "blur(2px)" }}
      />
      <Container>
        <Image
          src="/comedor.jpg"
          alt="meal"
          width={280}
          height={70}
          quality={100}
          style={{
            display: "block",
            margin: "4rem auto",
          }}
        />
        <form>
          <input placeholder="Correo electrónico" />
          <input placeholder="Contraseña" />
          <LoginBtn primary onClick={gotoHome}>
            Cliente
          </LoginBtn>
          <LoginBtn onClick={gotoAdmin}>Administrador</LoginBtn>

          <span style={{ margin: "auto" }}>
            {" "}
            ¿No tienes una cuenta? <Link href="/register"> Registrate</Link>
          </span>
        </form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  width: 100vw;
  padding-bottom: 40px;
  height: 100vh;
  background-repeat: no-repeat;

  input,
  button,
  span {
    display: block;
    height: 2.4rem;
    font-size: 0.8rem;

    width: 15rem;
    border-radius: 10px;
  }

  input {
    margin: 1rem auto;
    border: 1px solid #797979;
  }

  span {
    * {
      color: #284bc1;
    }
    margin: auto;
    font-size: 0.9rem;
  }
`;
const Container = styled.div`
  position: relative;
  height: 600px;
  width: 500px;
  border-radius: 15px;
  background-color: white;
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
