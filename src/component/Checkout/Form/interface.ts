import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces";

export type CheckoutFormProps = {
  user?: User;
  hasPressedOrder?: boolean;
  setUser?: Dispatch<SetStateAction<User>>;

  children?: React.ReactNode;
};
