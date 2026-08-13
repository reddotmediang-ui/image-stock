import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Discover African Visual Excellence</h1>
        <p className={styles.subtitle}>Premium stock photography and videography from Africa's most talented creators</p>
        <div className={styles.cta}>
          <Link href="/images" className={styles.ctaButton}>Browse Images</Link>
          <Link href="/videos" className={`${styles.ctaButton} ${styles.secondary}`}>Browse Videos</Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img 
          src="https://www.shutterstock.com/image-photo/24-december-2018-lagos-nigeria-bridge-1267004656?trackingId=bf74a3c8-bbaa-4d34-b072-4ab1c2100515&listId=undefined" 
          alt="African landscape and culture"
          loading="lazy"
        />
      </div>
    </section>
  );
}
