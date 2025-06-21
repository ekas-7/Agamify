import { useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Home = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // Redirect to dashboard if user is logged in
      window.location.href = '/dashboard';
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to Agamify</h1>
        <p>Sign in with GitHub to access your dashboard.</p>
        {!session ? (
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        ) : (
          <button onClick={() => signOut()}>Sign out</button>
        )}
      </main>
    </div>
  );
};

export default Home;