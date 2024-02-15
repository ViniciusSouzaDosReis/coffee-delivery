import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeListContainer, CoffeeCardContainer } from "./styles";
// import coffeeImage from "../../images/Image.png";
import coffeeImage from "./images/Image.png";

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
        />
        <CoffeeCard
          types={["Tradicional", "Gelado", "Espresso"]}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price="9, 90"
          imageUrl={coffeeImage}
        />
      </CoffeeCardContainer>
    </CoffeeListContainer>
  );
}

export { CoffeeList };
