import Link from 'next/link';
import styles from '@/styles/FeaturedGallery.module.css';

export default function FeaturedGallery() {
  const featuredItems = [
    {
      id: 1,
      title: 'Transportation',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fc3202d48dbb248c3892278d3847d3169%2Fe400088f041a47f8bcca6237a1764fa1?format=webp&width=800&height=1200',
      link: '/images/transportation'
    },
    {
      id: 2,
      title: 'Market',
      image: 'https://media.gettyimages.com/id/2159863988/photo/fashion-designer-draping-cloth-on-a-mannequin.jpg?s=612x612&w=0&k=20&c=RetMrlhlXhpLCT-DO9L4JfLT03ByNn-Twrnlwh8__yk=',
      link: '/images/market'
    },
    {
      id: 3,
      title: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1516684067409-01f0c0a8ba89?w=400&h=300&fit=crop',
      link: '/images/lifestyle'
    },
    {
      id: 4,
      title: 'Nature',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      link: '/images/nature'
    },
    {
      id: 5,
      title: 'Aerial',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      link: '/images/aerial'
    },
    {
      id: 6,
      title: 'Food',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop',
      link: '/images/food'
    }
  ];

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore Our Collections</h2>
        <div className={styles.grid}>
          {featuredItems.map(item => (
            <Link key={item.id} href={item.link} className={styles.card}>
              <div className={styles.cardImage}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
