export const HeroSection = () => {
	return (
		<section id="hero-section" className="relative w-full h-screen overflow-hidden">
			<video autoPlay muted loop className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-0">
				<source src="/static-media/hero-sec video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
			<div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
				<h1 className="uppercase mb-10 text-2xl md:text-4xl lg:text-7xl font-extrabold tracking-wider">Achieve Your Dreams with Us</h1>
				<form className="search-bar flex justify-center items-center relative">
					<div className="relative w-full max-w-xl">
						<input
							type="text"
							placeholder="Search here"
							className="p-4 w-full text-lg border border-gray-300 rounded-full outline-none bg-transparent placeholder-white text-white pr-16"
						/>
						<button
							type="submit"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 font-semibold bg-green-600 text-black rounded-3xl">
							Search
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
