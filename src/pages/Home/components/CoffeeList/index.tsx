import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeListContainer, CoffeeCardContainer } from "./styles";

function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeCardContainer>
        <CoffeeCard />
      </CoffeeCardContainer>
    </CoffeeListContainer>
  );
}

export { CoffeeList };
