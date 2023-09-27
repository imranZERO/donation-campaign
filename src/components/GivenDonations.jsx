import {useEffect, useState} from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';
import {getStoredDonation} from '../utilities/localStorage';

const GivenDonations = () => {
	const donations = useLoaderData();
	const [givenDonations, setGivenDonations] = useState([]);
	const [featuredLength, setFeaturedLength] = useState(4);

	useEffect(() => {
		const storedDonationIds = getStoredDonation();
		if (donations.length > 0) {
			const donationsGiven = donations.filter(donation =>
				storedDonationIds.includes(donation.id),
			);
			setGivenDonations(donationsGiven);
		}
	}, []);

	const navigate = useNavigate();
	const handleShowDetail = id => {
		navigate(`/donations/${id}`);
	};

	let shownAll = false;
	return (
		<>
			{/* <h1>Donations you have given: {givenDonations.length}</h1> */}
			<div className="max-w-[1366px] mx-auto mb-12 py-10 px-4">
				<div className="grid md:grid-cols-2 gap-6">
					{givenDonations.slice(0, featuredLength).map(donation => (
						<div
							key={donation.id}
							className="card md:card-side bg-base-100 rounded-md"
							style={{backgroundColor: `${donation.colorCard}`}}>
							<figure>
								<img className="h-full w-full" src={donation.picture} alt="" />
							</figure>
							<div className="card-body p-6">
								<p
									className="badge rounded border-0 text-sm font-medium"
									style={{
										backgroundColor: `${donation.colorCategory}`,
										color: `${donation.colorText}`,
									}}>
									{donation.category}
								</p>
								<h2 className="card-title text-[#0B0B0B]">{donation.title}</h2>
								<p
									className="text-lg font-semibold"
									style={{color: `${donation.colorText}`}}>
									${donation.price}
								</p>
								<div className="card-actions">
									<button
										onClick={() => handleShowDetail(donation.id)}
										className="btn btn-sm btn-neutral text-white text-lg font-medium capitalize rounded border-0"
										style={{backgroundColor: `${donation.colorText}`}}>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className={`mt-10 text-center ${featuredLength === donations.length ? 'hidden' : ''} `}>
					<button onClick={() => setFeaturedLength(donations.length)} className="btn btn-primary text-lg text-white capitalize">See All</button>
				</div>
			</div>
		</>
	);
};

export default GivenDonations;
