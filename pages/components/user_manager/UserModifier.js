import styled from "styled-components";
import Image from "next/image";
import React, { useState } from "react";

const ModifierModal = (props) => {
  return props.open ? (
    <ModifierModalStyle>
      <span>Modificar Producto</span>
      <input placeholder="Número de cedula" />
      <input placeholder="Número de carné" />
      <input placeholder="Nombre" />
      <input placeholder="Apellido1" />
      <input placeholder="Apellido2" />
      <input type="date" placeholder="Fecha de nacimiento" />
      <input placeholder="Correo electrónico" />
      <input placeholder="Correo institucional" />

      <BtnStyle primary>Modificar</BtnStyle>
      <BtnStyle onClick={() => props.set(false)}>Cancelar</BtnStyle>
    </ModifierModalStyle>
  ) : null;
};

const ProductContainer = (props) => {
  const [open, setState] = useState(false);
  return (
    <Product>
      <Image
        src="/hutao.png"
        alt="meal"
        width={130}
        height={100}
        style={{
          borderRadius: "5px",
          marginRight: "1rem",
        }}
      />
      <ProductDetail>
        <span>{props.dci}</span>
        <span>
          {props.name} {props.firstName}
        </span>
      </ProductDetail>
      <div>
        <Image
          src="/menu.png"
          alt="meal"
          width={20}
          height={20}
          onMouseEnter={() => setState(true)}
          style={{ position: "absolute", marginLeft: "1.5rem" }}
        />
        {open ? (
          <OptionMenu onMouseLeave={() => setState(false)}>
            <ul>
              <li onClick={() => props.openModifierModal(true)}>Modificar</li>
              <li>Historial</li>
              <li>Eliminar</li>
            </ul>
          </OptionMenu>
        ) : null}
      </div>
    </Product>
  );
};

export default function ProductModifier() {
  const [openModifier, setOpenModifier] = useState(false);

  const data = [
    {
      dni: "11790261",
      dci: "2018160243",
      name: "Fabián",
      firstName: "Vargas",
      studentEmail: "favargasc",
    },
    {
      dni: "11790261",
      dci: "2018160243",
      name: "Fabián",
      firstName: "Vargas",
      studentEmail: "favargasc",
    },
    {
      dni: "11790261",
      dci: "2018160243",
      name: "Fabián",
      firstName: "Vargas",
      studentEmail: "favargasc",
    },
    {
      dni: "11790261",
      dci: "2018160243",
      name: "Fabián",
      firstName: "Vargas",
      studentEmail: "favargasc",
    },
    {
      dni: "11790261",
      dci: "2018160243",
      name: "Fabián",
      firstName: "Vargas",
      studentEmail: "favargasc",
    },
    {
      dni: "11790261",
      dci: "2018160243",
      name: "Fabián",
      firstName: "Vargas",
      studentEmail: "favargasc",
    },
  ];

  return (
    <Wrapper>
      <ModifierModal set={setOpenModifier} open={openModifier} />
      {data.map((data, index) => (
        <ProductContainer
          key={index}
          dni={data.dni}
          dci={data.dci}
          name={data.name}
          firstName={data.firstName}
          studentEmail={data.studentEmail}
          openModifierModal={setOpenModifier}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem;
  margin-right: 3rem;
`;
const Product = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid black;
  height: 8rem;
  border-radius: 10px;
  background-color: white;
`;
const ProductDetail = styled.div`
  margin: 1.5rem 5rem 1.5rem 0.5rem;
  * {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

const OptionMenu = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid gray;
  z-index: 2;
  top: auto;
  border-radius: 10px;
  li {
    margin: 0.5rem;

    :hover {
      color: red;
    }
  }
`;

const ModifierModalStyle = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  top: 5%;
  left: 40%;
  padding: 1rem 2rem;
  border-radius: 15px;

  z-index: 4;
  background-color: white;
  height: 600px;
  width: 500px;
  border: 1px solid black;

  select,
  option {
    font-size: 0.9rem;
  }

  option {
    margin: auto 0.5rem;
  }

  input,
  button,
  select {
    display: block;
    margin: auto;
    margin-bottom: 2rem;
    height: 2rem;
    width: 12rem;
    border: 1px solid black;
    border-radius: 10px;
  }
  span {
    font-weight: bold;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    margin: 2rem 0;
    grid-column: span 2;
  }
`;

const BtnStyle = styled.button`
  color: ${(props) => (props.primary ? "white" : "#284bc1")};
  background-color: ${(props) => (props.primary ? "#284bc1" : "white")};
  border: 1px solid #284bc1;
  font-weight: bold;
`;
