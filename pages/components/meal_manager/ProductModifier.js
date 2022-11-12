import styled from "styled-components";
import Image from "next/image";
import React, { useState } from "react";

const ModifierModal = (props) => {
  return props.open ? (
    <ModifierModalStyle>
      <span>Agregar Producto</span>
      <input placeholder="Nombre del producto" />
      <input placeholder="Precio del producto" />
      <select name="Disponibilidad">
        <option value="1">Available</option>
        <option value="2">Unavailable</option>
      </select>
      <select name="Tipo de Alimento">
        <option value="1">Plato principal</option>
        <option value="2">Postre</option>
        <option value="3">adicional</option>
        <option value="4">Bebida</option>
      </select>
      <select name="Tiempo de comida">
        <option value="1">Desayuno</option>
        <option value="2">Almuerzo</option>
        <option value="3">Café</option>
        <option value="4">Cena</option>
      </select>
      <BTNControl>
        <BtnStyle primary>Agregar</BtnStyle>
        <BtnStyle onClick={() => props.set(false)}>Cancelar</BtnStyle>
      </BTNControl>
    </ModifierModalStyle>
  ) : null;
};

const AddModal = (props) => {
  return props.open ? (
    <ModifierModalStyle>
      <span>Modificar Producto</span>
      <input placeholder="Nombre del producto" />
      <input placeholder="Precio del producto" />
      <select name="Disponibilidad">
        <option value="1">Available</option>
        <option value="2">Unavailable</option>
      </select>
      <select name="Tipo de Alimento">
        <option value="1">Plato principal</option>
        <option value="2">Postre</option>
        <option value="3">adicional</option>
        <option value="4">Bebida</option>
      </select>
      <select name="Tiempo de comida">
        <option value="1">Desayuno</option>
        <option value="2">Almuerzo</option>
        <option value="3">Café</option>
        <option value="4">Cena</option>
      </select>
      <BTNControl>
        <BtnStyle primary>Modificar</BtnStyle>
        <BtnStyle onClick={() => props.set(false)}>Cancelar</BtnStyle>
      </BTNControl>
    </ModifierModalStyle>
  ) : null;
};

const ProductContainer = (props) => {
  const [open, setState] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  return (
    <Product>
      <Image
        src={props.url}
        alt="meal"
        width={130}
        height={100}
        style={{ borderRadius: "5px", marginRight: "1rem" }}
      />
      <ProductDetail>
        <span>{`#${props.id}`}</span>
        <span>{props.state ? "Available" : "Unavailable"}</span>
      </ProductDetail>
      <ProductDetail>
        <span>{props.name}</span>
        <span>{props.type}</span>
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
              <li onClick={() => props.openAddModal(true)}>Agregar</li>
              <li onClick={() => props.openModifierModal(true)}>Modificar</li>
              <li
                onMouseEnter={() => setOpenTime(true)}
                onMouseLeave={() => setOpenTime(false)}
              >
                Tiempo
                {openTime ? (
                  <TimeOptions>
                    <ul>
                      <li>Desayuno</li>
                      <li>Almuerzo</li>
                      <li>Café</li>
                      <li>Cena</li>
                    </ul>
                  </TimeOptions>
                ) : null}
              </li>
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
  const [openAdd, setOpenAdd] = useState(false);

  const data = [
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
    {
      id: 2,
      name: "Mondongo",
      type: "Main",
      url: "/meal.jpg",
      state: "available",
    },
  ];

  return (
    <Wrapper>
      <ModifierModal set={setOpenModifier} open={openModifier} />
      <AddModal set={setOpenAdd} open={openAdd} />
      {data.map((data, index) => (
        <ProductContainer
          key={index}
          id={data.id}
          name={data.name}
          url={data.url}
          state={data.state}
          type={data.type}
          openModifierModal={setOpenModifier}
          openAddModal={setOpenAdd}
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
  margin: 1.5rem 1rem 1.5rem 0.5rem;
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

const TimeOptions = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid gray;
  z-index: 3;
  border-radius: 10px;
`;

const ModifierModalStyle = styled.div`
  position: absolute;
  top: 5%;
  left: 40%;
  margin: auto;
  padding-top: 2rem;
  z-index: 4;
  background-color: white;
  height: 600px;
  width: 400px;
  border-radius: 15px;
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
    width: 13rem;
    border: 1px solid black;
    border-radius: 10px;
  }
  span {
    font-weight: bold;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    margin: 2rem 0;
  }
`;

const BTNControl = styled.div`
  margin-top: 3rem;
  button {
    margin-bottom: 1rem;
    border: 1px solid #284bc1;
  }
`;

const BtnStyle = styled.button`
  color: ${(props) => (props.primary ? "white" : "#284bc1")};
  background-color: ${(props) => (props.primary ? "#284bc1" : "white")};
  font-weight: bold;
`;
