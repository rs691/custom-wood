import type { User as FirebaseUser } from 'firebase/auth';

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  woodType: string;
  category: string;
};

export type Project = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  dateCompleted: string;
  woodType: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  imageUrl: string;
};

export type Order = {
    id: string;
    userId: string;
    orderDate: string;
    totalAmount: number;
    status: string;
    productIds: string[];
}

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type UserProfile = {
    id: string;
    name:string;
    email: string;
}

export type Wood = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    properties: string[];
}

<<<<<<< HEAD
export type AppUser = FirebaseUser & UserProfile;
=======
export type AppUser = FirebaseUser & UserProfile;
>>>>>>> bce9c6f5d1909e58b85cce49eda75ba8e3b81ca4
