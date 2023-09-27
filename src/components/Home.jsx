import DonationList from './DonationList';

const Home = () => {
	return (
		<>
			<div className="hero mb-20">
				<div className="hero-overlay bg-white bg-opacity-90"></div>
				<div className="hero-content text-center text-neutral-content my-20">
					<div className="">
						<h1 className="mb-5 text-4xl md:text-5xl text-[#0B0B0B] font-bold leading-relaxed">
							I Grow By Helping People In Need
						</h1>
						<div className="flex max-w-md mx-auto my-8">
							<div className="flex rounded-md overflow-hidden w-full h-12">
								<input
									type="text"
									placeholder="Search here…"
									className="w-full rounded-md p-4 rounded-r-none input input-bordered text-lg text-black"
								/>
								<button className="btn btn-neutral h-full bg-[#FF444A] capitalize text-base text-white px-6 font-semibold border-0 rounded-l-none rounded-r-md">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<DonationList></DonationList>
		</>
	);
};

export default Home;
