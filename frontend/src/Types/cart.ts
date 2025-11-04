export interface cartItemTypes {
  product: string;
  unitPrice: number;
  quantity: number;
}

export interface cartTypes {
  userId: string;
  items: cartItemTypes[];
  totalAmount: number;
  completed: boolean;
}
