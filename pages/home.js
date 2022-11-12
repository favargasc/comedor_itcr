import styled from 'styled-components'
import MealOptions from './components/home/MealOptions'
import Meal from './components/home/Meal'
import Menu from './components/util/Menu'
export default function Home () {
  return (
    <Layout>
      <Menu />
      <Options>
        <MealOptions />
      </Options>
      <MealList>
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />
        <Meal name='Sopa de Pollo' price='₡5000' />

      </MealList>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 0.25fr 1fr;
  grid-gap: 1rem;
  height: 100vh;
`
const Options = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
const MealList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 2;
  grid-row: 2;
  padding-top: 2rem;
  margin: 0 2rem;
`
