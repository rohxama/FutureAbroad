
import Link from 'next/link';
// import styles from '../styles/Header.css'; 

export const Header = () => {
	return (
		<header className='w-full bg-green-500'>
				<nav className='flex flex-row gap-4 items-center justify-between max-w-6xl mx-auto p-3'>
						<Link href="/">FutureAboard</Link>
							<ul className='flex flex-row gap-4'>
								<li><Link href="#">Home</Link></li>
								<li><Link href="#">Services</Link></li>
								<li><Link href="#">Countries</Link></li>
								<li><Link href="#">Contact Us</Link></li>
							</ul>
						<div className='flex flex-row gap-4'>
							<Link href="#"><i className="ri-login-box-line"></i>Log In</Link>
							<Link href="#"><i className="ri-user-3-line"></i>Sign Up</Link>
						</div>
				</nav>
		</header>
	);
};
