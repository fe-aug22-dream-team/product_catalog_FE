import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../../public/img/header_img/Logo.svg';
import Fav from '../../public/img/header_img/favourites.svg';
import Shopping from '../../public/img/header_img/shopping.svg';
import Close from '../../public/img/header_img/close.svg';
import Open from '../../public/img/header_img/menu.svg';
import Link from 'next/link';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: fevPhones} = trpc.favourites.favoritesRoute.useQuery();
  const { data: phones} = trpc.cart.cartRoute.useQuery();

  const { data: session } = useSession();

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <main className={styles.menu__page}>
          <div className={styles.header__menu}>
            <Link href="#home" className={styles.link__img}>
              <Image className={styles.img__logo} src={Logo} alt="Logo" />
            </Link>
            <div className={styles.menu}>
              <button onClick={closeMenu} className={styles.link__nav}>
                <Image className={styles.img} src={Close} alt="shopping" />
              </button>
            </div>
          </div>
          <div className={styles.content__nav__menu}>
            <ul className={styles.list__menu}>
              <li className={styles.list__item}>
                <Link href="/" className={styles.list__link}>
                  home
                </Link>
              </li>

              <li className={styles.list__item}>
                <Link href="/phones" className={styles.list__link}>
                  phones
                </Link>
              </li>

              <li className={styles.list__item}>
                <Link href="/tablets" className={styles.list__link}>
                  tablets
                </Link>
              </li>

              <li className={styles.list__item}>
                <Link href="/accessories" className={styles.list__link}>
                  accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.content__link__menu}>
            <Link href="/favourites" className={styles.link__nav__menu}>
              <Image className={styles.img} src={Fav} alt="favourites" />
            </Link>
            <Link href="/cart" className={styles.link__nav__menu}>
              <Image className={styles.img} src={Shopping} alt="shopping" />
            </Link>
          </div>
        </main>
      )}

      <header className={styles.header}>
        <Link href="/" className={styles.link__img}>
          <Image className={styles.img__logo} src={Logo} alt="Logo" />
        </Link>

        <div className={styles.content__nav}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link href="/" className={styles.list__link}>
                home
              </Link>
            </li>

            <li className={styles.list__item}>
              <Link href="/phones" className={styles.list__link}>
                phones
              </Link>
            </li>

            <li className={styles.list__item}>
              <Link href="/tablets" className={styles.list__link}>
                tablets
              </Link>
            </li>

            <li className={styles.list__item}>
              <Link href="/accessories" className={styles.list__link}>
                accessories
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content__link}>
        {session ? (
          <>
            <Link href="/favourites" className={styles.link__nav}>
              <span className={styles.count}>{fevPhones?.favorites.length || 0}</span>
              <Image className={styles.img} src={Fav} alt="favourites" />
            </Link>
            <Link href="/cart" className={styles.link__nav}>
              <span className={styles.count}>{phones?.cart.length || 0}</span>
              <Image className={styles.img} src={Shopping} alt="shopping" />
            </Link>
            <button
              style={{ marginRight: '10px' }}
              onClick={() => signOut()}
              className={styles.list__link}
            >
              Log out
            </button>
          </>
          ) : (
          <div className={styles.link__nav}>
            <button
              style={{ marginRight: '10px' }}
              onClick={() => signIn()}
              className={styles.list__link_auth}
            >
              Sign in
            </button>
          </div>
        )}
      </div>

        <div className={styles.menu}>
          {session ? (
              ""
            ): (
            <div className={styles.link__nav}>
            <button
              style={{ marginRight: '10px' }}
              onClick={() => signIn()}
              className={styles.list__link_auth}
            >
              Sign in
            </button>
            </div>
          )}
          <button onClick={openMenu} className={styles.link__nav}>
            <Image className={styles.img} src={Open} alt="menu-opener" />
          </button>
        </div>
      </header>
    </>
  );
}
