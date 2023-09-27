import {NavLink, Link} from 'react-router-dom';

const Header = () => {
	const links = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/Donation">Donation</NavLink>
			</li>
			<li>
				<NavLink to="/statistics">Statistics</NavLink>
			</li>
		</>
	);

	return (
		<div className='max-w-[1366px] mx-auto'>
			<div className="navbar py-4 md:py-8">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
							{links}
						</ul>
					</div>
					<Link to={'/'} className="">
						<img src={'/images/Logo.png'} className="h-14" alt="" />
					</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-lg text-[#0B0B0B]">{links}</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
