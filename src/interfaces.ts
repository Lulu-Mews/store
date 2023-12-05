export interface Product {
  id: string;
  name: string;
  description?: string;
  details?: string;
  price: number;
  vat: number;
  images?: string[];
  category?: string;
}

export interface SpacingProps {
  spacing?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}
