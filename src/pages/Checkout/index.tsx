import { CheckoutContainer } from "./styles";
import { UserInformation } from "./components/UserInformation";
import { OrderInformation } from "./components/OrderInformation";

import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

const OrderPaymentFormValidationSchema = zod.object({
  cep: zod.string().min(9),
  street: zod.string().min(1),
  number: zod.string().min(1),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(2).max(2),
  complement: zod.string().optional(),
  paymentMethod: zod.string().min(1),
});

export type OrderPaymentFormData = zod.infer<
  typeof OrderPaymentFormValidationSchema
>;

function Checkout() {
  const orderPayment = useForm<OrderPaymentFormData>({
    resolver: zodResolver(OrderPaymentFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      uf: "",
      paymentMethod: "credit",
    },
  });

  const { handleSubmit } = orderPayment;
  const { finalizeOrder } = useContext(CartContext);

  function handleSubmitOrderPaymentFortm(data: OrderPaymentFormData) {
    finalizeOrder(data);
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitOrderPaymentFortm)}>
        <FormProvider {...orderPayment}>
          <UserInformation />
          <OrderInformation />
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
}

export { Checkout };
