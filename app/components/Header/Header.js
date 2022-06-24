import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useSnipcart } from 'use-snipcart';

import styles from './Header.module.css';

const Header = () => {
  const { cart = {} } = useSnipcart();
  console.log(cart)

  return (
    <header className={styles.header}>
        <div className={styles.headerTitle}>
        <h1>
           Shredder Hub
        </h1>
        </div>

        <p className={styles.headerCart}>
          <button
            className="snipcart-checkout"
          >
            <FaShoppingCart size={30} />
            <span>
              ${cart.subtotal?.toFixed(2)}
            </span>
          </button>
        </p>
        {/* <ul className={styles.headerLocales}>
          <li>
            <Link href="#">
              <a>
                ES
              </a>
            </Link>
          </li>
        </ul> */}

    </header>
  )
}

export default Header;