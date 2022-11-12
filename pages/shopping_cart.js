import styled from 'styled-components'
import Detail from './components/shopping/Detail'
import CartProduct from './components/shopping/Product'
import Menu from './components/util/Menu'

export default function ShoppingCart () {
  return (
    <Wrapper>
      <Menu search={ true }/>
      <CartProduct url='/meal.jpg' />
      <Detail main='2000' total='5000' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.3fr;
  grid-template-columns: 0.2fr 1fr;
  height: 100vh;
  background-color: #e7e7e7;
`
