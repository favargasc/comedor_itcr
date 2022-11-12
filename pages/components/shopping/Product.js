import styled from 'styled-components'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductContainer = (props) => {
  const [count, setCount] = useState(1)

  const add = () => {
    setCount(count + 1)
  }

  const subtract = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <Product>
      <Image
        src={props.url}
        alt='meal'
        width={150}
        height={100}
        style={{ borderRadius: '5px', marginRight: '1rem' }}
      />
      <ProductDetail>
        <span>{props.name}</span>
        <span>{`₡${props.cost * count}`}</span>
        <Controller>
          <button onClick={subtract}>
            <Image
              src='/subtract.png'
              alt='add'
              width={20}
              height={20}
            />
          </button>
          <span style={{ margin: '0 0.3rem' }}>{count}</span>
          <button onClick={add}>
            <Image
              src='/add.png'
              alt='add'
              width={20}
              height={20}
            />
          </button>
        </Controller>
      </ProductDetail>
      <DeleteProduct>
        <Image
          src='/basura.png'
          alt='add'
          width={40}
          height={40}
        />
      </DeleteProduct>
    </Product>
  )
}

export default function Meals () {
  const data = [
    {
      cost: 3000,
      name: 'Main',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Dessert',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Dessert',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Main',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Dessert',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Dessert',
      url: '/meal.jpg'
    }, {
      cost: 3000,
      name: 'Main',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Dessert',
      url: '/meal.jpg'
    },
    {
      cost: 3000,
      name: 'Dessert',
      url: '/meal.jpg'
    }
  ]

  return (
    <Wrapper>
      {
        data.map((data, index) =>
          <ProductContainer cost={data.cost} name={data.name} url={data.url} key={index} />
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 1;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem;
`
const Product = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid black;
  height: 8.5rem;
  border-radius: 10px;
  background-color: white;
`
const ProductDetail = styled.div`
  margin: 1rem;
  * {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`
const Controller = styled.div`
  display: flex;
  padding: 0.2rem 0.6rem;
  border: 1px solid black;
  width: 80px;
  height: 30px;
  border-radius: 10px;

  span {
    font-size: 1.1rem;
  }

  button {
    border:none;
    background-color: white;
    font-size: large;
  }
`
const DeleteProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #f6c3c3;
  border: 1px solid black;
  margin-left: 1rem;
  width: 4rem;
`
