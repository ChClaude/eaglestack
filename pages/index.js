import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eaglestack - We build modern software solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Eaglestack</Link>
        </h1>

        <p className={styles.description}>
          This site is still under development. We'll be back soon!
        </p>
        <p>
          Please contact Chris at{' '}
          <a
            style={{ color: '#0070f3' }}
            href="mailto:christ@tchambila@gmail.com"
          >
            christ@tchambila@gmail.com
          </a>{' '}
          for more
        </p>
      </main>

      <footer className={styles.footer}>
        <Link href="/">Powered by Eaglestack</Link>
      </footer>
    </div>
  );
}
