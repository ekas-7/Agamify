'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const navStyles = {
  container: {
    padding: '1rem 2rem',
    backgroundColor: '#1e293b',
    color: 'white',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  ul: {
    display: 'flex',
    gap: '2rem',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  signOutButton: {
    backgroundColor: '#ef4444',
  }
};

const Navbar: React.FC = () => {
    const { data: session } = useSession();

    return (
        <div style={navStyles.container}>
            <nav style={navStyles.nav}>
                <div>
                    <h1 style={{ margin: 0 }}>Agamify</h1>
                </div>
                <ul style={navStyles.ul}>
                    <li>
                        <Link href="/" style={navStyles.link}>Home</Link>
                    </li>
                    {session ? (
                        <>
                            <li>
                                <Link href="/dashboard" style={navStyles.link}>Dashboard</Link>
                            </li>
                            <li>
                                <button 
                                    onClick={() => signOut()} 
                                    style={{ ...navStyles.button, ...navStyles.signOutButton }}
                                >
                                    Sign Out
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button 
                                onClick={() => signIn('github')} 
                                style={navStyles.button}
                            >
                                Sign In with GitHub
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
