export interface productType {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color?: string;
  category: string;
  discount?: number;
  rate: number;
  sales: number;
  popular?: boolean;
  onSale?: true;
}