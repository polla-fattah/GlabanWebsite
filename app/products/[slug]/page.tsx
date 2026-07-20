import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/data/products';
import ProductDetailTemplate from '@/components/ProductDetailTemplate';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }
  return {
    title: product.name,
    description: product.listingDesc,
    keywords: [
      product.name,
      product.category,
      'Glaban products',
      'petroleum software',
      'fuel operations',
      'KRG energy software',
    ],
    alternates: {
      canonical: `https://glaban.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Glaban Enterprise Fuel & Energy Platform`,
      description: product.listingDesc,
      url: `https://glaban.com/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://glaban.com${product.image}`,
    description: product.listingDesc,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Glaban Technologies',
    },
    offers: {
      '@type': 'Offer',
      url: `https://glaban.com/products/${product.slug}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Glaban Technologies',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailTemplate product={product} />
    </>
  );
}
