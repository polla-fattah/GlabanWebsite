import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/data/products';
import ProductDetailTemplate from '@/components/ProductDetailTemplate';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetailTemplate product={product} />;
}
