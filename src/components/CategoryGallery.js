import styles from '@/styles/CategoryGallery.module.css';

export default function CategoryGallery({ category, images, videos, isVideo = false }) {
  const items = isVideo ? videos : images;
  const stockPlatforms = {
    getty: { name: 'Getty Images', url: '#' },
    shutterstock: { name: 'Shutterstock', url: '#' },
    adobe: { name: 'Adobe Stock', url: '#' },
    pond5: { name: 'Pond5', url: '#' }
  };

  return (
    <section className={styles.categoryGallery}>
      <div className={styles.container}>
        <h1 className={styles.title}>{category.title}</h1>
        <p className={styles.description}>{category.description}</p>
        
        <div className={styles.masonry}>
          {items.map(item => (
            <div key={item.id} className={styles.galleryItem}>
              <div className={styles.itemImage}>
                <img 
                  src={item.thumb} 
                  alt={item.title}
                  loading="lazy"
                />
                {isVideo && <div className={styles.playIcon}>▶</div>}
              </div>
              <div className={styles.itemOverlay}>
                <h3>{item.title}</h3>
                <div className={styles.platforms}>
                  {item.platforms.map(platform => (
                    <a 
                      key={platform}
                      href={stockPlatforms[platform].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.platformLink}
                    >
                      {stockPlatforms[platform].name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
