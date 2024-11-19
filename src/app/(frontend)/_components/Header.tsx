import Link from 'next/link';

export const Header = () => {
	return (
		<header className='w-full bg-white sticky top-0 z-50'>
			<nav className='flex flex-row gap-4 items-center justify-between max-w-6xl mx-auto p-3'>
				<Link href="/" className='font-semibold text-4xl'>FutureAboard</Link>
				<ul className='flex flex-row gap-4'>
					<li><Link href="#" className='font-medium text-md'>Home</Link></li>
					<li><Link href="#" className='font-medium text-md'>Services</Link></li>
					<li><Link href="#" className='font-medium text-md'>Countries</Link></li>
					<li><Link href="#" className='font-medium text-md'>Contact Us</Link></li>
				</ul>
				<div className='flex flex-row gap-4'>
					<Link href="#" className='font-medium text-md'><i className="ri-login-box-line"></i>Log In</Link>
					<Link href="#" className='font-medium text-md'><i className="ri-user-3-line"></i>Sign Up</Link>
				</div>
			</nav>
		</header>
	);
};
