import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {session ? (
                    <>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <button onClick={() => signOut()}>Sign Out</button>
                        </li>
                    </>
                ) : (
                    <li>
                        <button onClick={() => signIn('github')}>Sign In with GitHub</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;