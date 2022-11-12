import styled from 'styled-components'
import Image from 'next/image'
import MealImg from '../../../public/meal.jpg'

export default function Meal (props) {
  return (
    <MealStyle>
      <Image
        src={MealImg}
        alt='meal'
        width={180}
        height={130}
        style={{ borderRadius: '5px' }}
      />
      <span>{props.name} {props.price}</span>
      <button>
        <Image
          src='/cart.png'
          alt='foo'
          width={20}
          height={20}
        />
      </button>
    </MealStyle>
  )
}

const MealStyle = styled.div`
  height: 240px;
  width: 240px;
  margin: 0 1.5rem;
  padding-top: 1rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  border: 1px solid #c2c2c2;

  :hover {
    background-color: #c4c4c4;
  }

  * {
    display: block;
    margin: auto;
    text-align: center;
  }

  button {
    width: 11rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid black;
    background-color: tomato;
  }

  span {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`
