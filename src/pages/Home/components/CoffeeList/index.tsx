import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeListContainer
} from './styles'

function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div>
        <CoffeeCard />
      </div>
    </CoffeeListContainer>
  )
}

export { CoffeeList }