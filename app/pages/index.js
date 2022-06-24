import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from '../components/App'
import Script from 'next/script';

export default function Home() {
  return (
    <>
    {/* <Head>
      <title>Shredder Hub</title>
      <link rel="preconnect" href="https://app.snipcart.com"/>
      <link rel="preconnect" href="https://cdn.snipcart.com"/>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
      <link rel="shortcut icon" href="../public/favicon.ico" />

      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous">
      </script>
    </Head>
    <Script
        src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
        hidden
        id="snipcart"
        data-api-key="Y2RmNjllNDItOWMxMS00MWY5LTliYzYtMzY1ZWE5M2MxZGU5NjM3OTE0NzA1MTA2Mzk2Njgz"
      ></Script> */}
    <App />
    </>
  )
}