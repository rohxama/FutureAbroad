
import Link from 'next/link';
// import styles from '../styles/Header.css'; 

export const Header = () => {
    return (
        <header>
            <div>
                <nav>
                    <Link href="/">FutureAboard</Link>
                    <div>
                        <ul>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Countries</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link href="#"><i className="ri-login-box-line"></i>Log In</Link>
                        <Link href="#"><i className="ri-user-3-line"></i>Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};
