
import Link from 'next/link';
import styles from '../styles/Header.css'; 

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav>
                    <Link href="/" className={styles.logo}>FutureAboard</Link>
                    <div>
                        <ul className={styles.navLinks}>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Countries</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.accountBar}>
                        <Link href="#"><i className="ri-login-box-line"></i>Log In</Link>
                        <Link href="#"><i className="ri-user-3-line"></i>Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
