'use client';

import React from 'react';
import { Product } from '../products/models';
import ProductCard from '@/components/ProductCard';

type Props = {
  products: Product[];
};

const Collection = (props: Props) => {
  return (
    <div className="grid h-full grid-cols-12">
      <div className="col-span-2 border">filters</div>
      <div className="col-span-10 border">
        <div className="grid grid-cols-4 gap-4 mt-4">
          {props.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
