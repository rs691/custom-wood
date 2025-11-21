export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
  stock: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageId: string;
  dateCompleted: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

export interface CartItem extends Product {
  quantity: number;
}
