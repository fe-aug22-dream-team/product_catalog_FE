import styles from '../styles/footer.module.css';
import Image from 'next/image'
import logo from '../icons/Logo.svg';
import { FC } from 'react';
import footerButton from '../icons/FooterButton.svg';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src={logo}
        alt="Logo"
      />
      <div className={styles.footer_inside}>
        <a className={styles.footer_links}>GITHUB</a>
        <a className={styles.footer_links}>CONTACTS</a>
        <a className={styles.footer_links}>RIGHTS</a>
      </div>
      <div className={styles.footer_button_container}>
        <p className={styles.footer_back_link}>Back to top</p>
        <button type='button' className={styles.footer_button}>
          <Image 
            src={footerButton}
            className={styles.footer_button_image}
            alt='Image for footer button'
          /> 
        </button>
      </div>
    </footer>
  );
}