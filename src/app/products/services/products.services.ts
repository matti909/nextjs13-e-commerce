import { Product } from '../models';

export const getAllProducts = (): Promise<Product[]> => {
  const url = 'https://fakestoreapi.com/products';
  return fetch(url, { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => data);
};
