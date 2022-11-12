import styled from 'styled-components'

export default function Detail (props) {
  return (
    <Wrapper>
      <PayDetail>
        <span>{`Costo total principales: ₡${props.main}`}</span>
        <span>{`Costo Total: ₡${props.total}`}</span>
      </PayDetail>
      <Order>
        Realizar Pago
      </Order>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  grid-column: 2;
  grid-row: 2;
  background-color: white;
  border: 1px solid black;
  padding-top: 2rem;
  padding-left: 8rem;
`
const PayDetail = styled.div`
  span {
    display: block;
    font-size: 1.3rem;
    font-weight: thin;
    margin-bottom: 3rem;
  }
`
const Order = styled.button`
  background-color: black;
  margin-left: 4rem;
  width: 12rem;
  height: 6rem;
  color: white;
  border-radius: 15px;
  font-size: larger;
  margin-left: 36rem;
`
