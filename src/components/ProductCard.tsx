import Image from 'next/image';
import React from 'react';

export interface CardData {
  title: string;
  price: string;
  image?: string;
}

interface Props {
  data: CardData;
}

function ProductCard({ data }: Props) {
  return (
    <div className="flex flex-col border-slate-300 w-160 h-160">
      <div className="flex w-64 h-64 ">
        <Image
          alt="hola"
          width={260}
          height={250}
          className="object-fill rounded-md "
          src={data.image ?? ''}
        />
      </div>
      <div className="top-2">
        <h2 className="break-words">name: {data.title}</h2>
        <span className="max-h-24">precio: ${data.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
