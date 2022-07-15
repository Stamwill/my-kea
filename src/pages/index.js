import App from "containers/App";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>furniture</title>
        <meta name="description" content="Furniture Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  );
}
