import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../assets/products.json";
import Product from "../components/Product/Product";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shredder Hub</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
        />
      </Head>

      <main className={styles.main}>
        <h1>Shredder Hub</h1>
        <h2>Your one stop shop for snowboarding</h2>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <Product {...product} key={i} />
          ))}
        </div>
      </main>
      <div
        id="snipcart"
        data-api-key="Y2RmNjllNDItOWMxMS00MWY5LTliYzYtMzY1ZWE5M2MxZGU5NjM3OTE0NzA1MTA2Mzk2Njgz"
        hidden
      ></div>
      <script
        src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
        async
      />
    </div>
  );
}