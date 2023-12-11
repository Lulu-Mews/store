import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces";

export type CheckoutComponentProps = {
  user?: User;
  delivery?: string;
  setHasPressedOrder?: Dispatch<SetStateAction<boolean>>;

  children?: React.ReactNode;
};
