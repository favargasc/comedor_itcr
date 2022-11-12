import styled from 'styled-components'
import Image from 'next/image'

export default function FoodType (props) {
  return (
    <FoodTypeStyle>
      <Image
        src={props.url}
        alt='meal'
        width={50}
        height={50}
      />
      <span>{props.name}</span>
    </FoodTypeStyle>
  )
}

const FoodTypeStyle = styled.button`
  height: 110px;
  width: 80px;
  margin: 0 1.5rem;
  padding-top: 0.2rem;
  border-radius: 35px;
  border: 1px solid black;

  * {
    display: block;
    margin: auto;
    text-align: center;
  }

  span {
    margin-top: 0.5rem;
    font-weight: bold;
  }

  :hover {
    background-color: #fffac7;
  }
`
