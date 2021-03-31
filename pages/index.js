import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Blah blah blah blah</p>

        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
