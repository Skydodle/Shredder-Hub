import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerTitle}>
        <h1>
           Shredder Hub
        </h1>
        </div>

        <p className={styles.headerCart}>
          <button>
            <FaShoppingCart size={30} />
            <span>
              $0.00
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