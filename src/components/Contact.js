import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.description}>
          Have questions or inquiries? We'd love to hear from you!
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <h2>Email</h2>
            <p>
              <a href="mailto:contact@africanphotosandvideos.com.ng">
                contact@africanphotosandvideos.com.ng
              </a>
            </p>
            <p className={styles.note}>For general inquiries and licensing questions</p>
          </div>

          <div className={styles.contactItem}>
            <h2>Phone</h2>
            <p>
              <a href="tel:+234-8XX-XXX-XXXX">
                +234-8XX-XXX-XXXX
              </a>
            </p>
            <p className={styles.note}>Available during business hours (WAT)</p>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Licensing & Partnerships</h2>
          <p>
            For licensing inquiries or partnership opportunities, please reach out via email with details about your project. We're happy to discuss custom arrangements or bulk licensing options.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Connect on Social Media</h2>
          <p>
            Follow us for the latest updates, behind-the-scenes content, and announcements.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}
