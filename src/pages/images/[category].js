import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGallery from '@/components/CategoryGallery';
import { imageCategories, getImageCategory } from '@/data/categories';

export default function ImageCategory({ category, images }) {
  const pageTitle = `${category.title} Stock Photos | African Photos and Videos`;
  const pageDescription = `Browse our collection of ${category.title.toLowerCase()} stock photography. High-quality images available on Getty Images, Shutterstock, Adobe Stock, and Pond5.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Images', url: '/images' },
    { name: category.title, url: `/images/${category.slug}` }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.africanphotosandvideos.com.ng/images/${category.slug}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': category.title,
            'description': pageDescription,
            'url': `https://www.africanphotosandvideos.com.ng/images/${category.slug}`,
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': breadcrumbs.map((item, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': item.name,
                'item': `https://www.africanphotosandvideos.com.ng${item.url}`
              }))
            }
          })}
        </script>
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <CategoryGallery category={category} images={images} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = getImageCategory(params.category);
  
  if (!category) {
    return { notFound: true };
  }

  // Placeholder gallery data - replace with real images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: `img-${category.slug}-${i + 1}`,
    title: `${category.title} ${i + 1}`,
    thumb: category.slug === 'transportation' && i === 0
      ? 'https://cdn.builder.io/api/v1/image/assets%2Fc3202d48dbb248c3892278d3847d3169%2F4efababb713847a2bf332e3eeb7e9e3f?format=webp&width=800&height=1200'
      : `https://images.unsplash.com/photo-${1550000000000 + i}?w=400&h=400&fit=crop`,
    url: 'https://media.gettyimages.com/id/2283463824/photo/beautiful-architectural-structure-with-lush-green-environment.jpg?s=612x612&w=0&k=20&c=6ZFj66EEFDMaWbVsm0sJuH3I-_53lhyD2ykXDkIVDdY=', // Replace with actual stock photo URL
    platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
  }));

  return {
    props: { category, images },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const paths = imageCategories.map((category) => ({
    params: { category: category.slug }
  }));

  return {
    paths,
    fallback: false
  };
}
