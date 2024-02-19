import { CheckoutContainer } from "./styles";
import { UserInformation } from "./components/UserInformation";
import { OrderInformation } from "./components/OrderInformation";

function Checkout() {
  return (
    <CheckoutContainer>
      <UserInformation />
      <OrderInformation />
    </CheckoutContainer>
  );
}

export { Checkout };
