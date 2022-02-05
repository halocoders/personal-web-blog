import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Button, ButtonGroup } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code With Rio</title>
        <meta
          name="codewithrio"
          content="Code With Rio Blockchain Frontend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
