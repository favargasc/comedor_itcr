import FoodType from './FoodType'
import FoodTime from './FoodTime'

export default function Meals () {
  const data = [
    {
      type: 'meal',
      name: 'Main',
      url: '/rice-bowl.png'
    },
    {
      type: 'meal',
      name: 'Dessert',
      url: '/cupcake.png'
    },
    {
      type: 'meal',
      name: 'Drink',
      url: '/mulled-wine.png'
    },
    {
      type: 'meal',
      name: 'Snack',
      url: '/taco.png'
    },
    {
      type: 'time',
      name: 'Breakfast',
      url: '/0800.png'
    },
    {
      type: 'time',
      name: 'Lunch',
      url: '/1100.png'
    },
    {
      type: 'time',
      name: 'Cofee Time',
      url: '/1500.png'
    },
    {
      type: 'time',
      name: 'Dinner',
      url: '/1700.png'
    }
  ]

  return (
    <div>
      {
        data.map((data, index) =>
          data.type === 'meal' ? <FoodType key={index} name={data.name} url={data.url} /> : <FoodTime key={index} name={data.name} url={data.url} />
        )
      }
    </div>
  )
}
