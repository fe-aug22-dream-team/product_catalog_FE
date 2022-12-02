import React from 'react';
import styles from '../styles/CartList.module.css';
import { Phones } from "@prisma/client";
import { CartItem } from './CartItem';
import phones from '../../public/db.json';

export const CartList: React.FC = () => (
  <ul className={styles.list}>
    {phones.map(phone => (
      <li key={phone.id}>
        <CartItem phone={phone} />
      </li>
    ))}
  </ul>
);