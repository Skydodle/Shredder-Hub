import Head from "next/head";
import styles from "../styles/Home.module.css";
import Product from "./Product/Product";
import React, { useState, useEffect } from 'react';
import { getAllBoards } from '../services/BoardService.js';
import Link from 'next/link';
import Script from 'next/script';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllBoards()
      .then(data => {
        // console.log(data)
        setProducts(data)
      })
      .catch((err) => {
        console.log('GET UNSUCCESSFUL', err)
      })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1>
           Shredder Hub
        </h1> */}
        <h2>Your one stop shop for snowboarding</h2>

        <div className={styles.grid}>
          {products ? products.map((product, i) => (
            <Product {...product} key={i} />
          )) : null}
        </div>
      </main>
    </div>
  );
}

{/* <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="Y2RmNjllNDItOWMxMS00MWY5LTliYzYtMzY1ZWE5M2MxZGU5NjM3OTE0NzA1MTA2Mzk2Njgz" id="snipcart">
</script> */}