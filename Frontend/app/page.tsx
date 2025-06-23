import React from 'react';
import styles from './page.module.css';
import homeStyles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import { HomeContent } from '@/app/home-content';

export default function Home() {  return (
    <div className={homeStyles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to Agamify</h1>
        <p>Sign in with GitHub to access your dashboard.</p>
        <HomeContent />
      </main>
    </div>
  );
}
