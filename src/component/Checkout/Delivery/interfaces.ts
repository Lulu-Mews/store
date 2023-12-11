import { Dispatch, SetStateAction } from "react";

export type CheckoutDeliveryProps = {
  setDelivery?: Dispatch<SetStateAction<string>>;
  hasPressedOrder?: boolean;
  delivery?: string;
};
