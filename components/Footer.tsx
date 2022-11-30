import styles from '../styles/footer.module.css';
import Image from 'next/image'
import NiceGadget from '../icons/NiceGadgets.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src={NiceGadget}
        alt=""
      />
      <div className={styles.footer_inside}>
        <a className={styles.footer_links}>GITHUB</a>
        <a className={styles.footer_links}>CONTACTS</a>
        <a className={styles.footer_links}>RIGHTS</a>
      </div>
      <div className={styles.footer_button_container}>
        <p className={styles.footer_back_link}>Back to top</p>
        <button type='submit' className={styles.footer_button}></button>
      </div>
    </footer>
  );
}