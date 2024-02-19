import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeListContainer, CoffeeCardContainer } from "./styles";
import coffeeImage from "../../../../assets/Coffee1.png";

function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeCardContainer>
        <CoffeeCard
          types={["Tradicional"]}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price="9, 90"
          imageUrl={coffeeImage}
          id="1"
        />
        <CoffeeCard
          types={["Tradicional", "Gelado", "Espresso"]}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price="9, 90"
          imageUrl={coffeeImage}
          id="2"
        />
      </CoffeeCardContainer>
    </CoffeeListContainer>
  );
}

export { CoffeeList };
