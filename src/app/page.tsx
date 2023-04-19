'use client';

import Collection from './collections/page';
import { getAllProducts } from './products/services';

async function fetchProducts() {
  return await getAllProducts();
}

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="p-4 font-bold">
      <div>
        <Collection products={products} />
      </div>
    </main>
  );
}
/* 
async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data = await getPost();
  console.log(data);
  return <main className="min-h-screen">hola</main>;
}
*/
