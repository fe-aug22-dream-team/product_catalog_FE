import { FC } from "react";
import { Phones } from "@prisma/client";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CartItem.module.css';
import fonts from '../styles/TypographyDesktop.module.css';
import close from '../../public/icons/Close.svg';
import minus from '../../public/icons/Minus.svg';
import plus from '../../public/icons/Plus.svg';

type Props = {
  phone: Phones;
};

export const CartItem:FC<Props> = ({ phone }) => {
  return (
    <div className={styles.item}>
      
      
      <div className={styles.item_about}>
        <button 
          type='button' 
          className={styles.button_close}
        >
          <Image
            className={styles.close}
            src={close}
            alt="close"
          />
        </button>

        <Image
          className={styles.image}
          src={`/${phone.image}`}
          height={66}
          width={66}
          alt="phone"
        />
        <Link 
          href={`/phones/${phone.id}`}
          className={`${styles.link}, ${fonts.bodyText}`}
        >
          {phone.name}
        </Link>
      </div>

      <div className={styles.item_price}>
        <div className={styles.button_container}>
          <button 
            type='button' 
            className={styles.button}
            disabled
          >
            <Image 
              className={styles.button_image}
              src={minus}
              alt='minus'
            />
          </button>

          <p className={fonts.bodyText}>1</p>

          <button 
            type='button' 
            className={styles.button}
          >
            <Image 
              className={styles.button_image}
              src={plus}
              alt='plus'
            />
          </button>
        </div>

        <p className={`${styles.price} ${fonts.h3Desktop}`}>
          {`$${phone.price}`}
        </p>
      </div>
    </div>
  );
};