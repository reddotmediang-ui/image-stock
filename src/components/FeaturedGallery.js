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
      image: 'https://www.shutterstock.com/image-photo/man-displaying-joy-happiness-2339160273?trackingId=fbdafe46-a713-4e56-bc7b-508486d3d208&listId=undefined',
      link: '/images/lifestyle'
    },
    {
      id: 4,
      title: 'Nature',
      image: 'https://media.gettyimages.com/id/2237820120/photo/macro-view-tiny-moss-plants.jpg?s=612x612&w=0&k=20&c=EIQcuXB-0VcT9m_8eemznlmG8T76uPl-qJ1RNL5H5SE=',
      link: '/images/nature'
    },
    {
      id: 5,
      title: 'Aerial',
      image: 'https://www.shutterstock.com/image-photo/plastic-bottle-on-isolated-background-2436999057?trackingId=66dbedfd-bab4-4f8c-a59d-2484f7146f9e&listId=undefined',
      link: '/images/aerial'
    },
    {
      id: 6,
      title: 'Food',
      image: 'https://www.shutterstock.com/image-photo/lagos-nigeria-august-11-2016-street-580738447?trackingId=03838478-cdde-4425-9748-52efb0639840&listId=undefined',
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
