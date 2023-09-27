import {useEffect, useState} from 'react';

const DonationList = () => {
	const [donations, setDonations] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => setDonations(data));
	}, []);

	return (
		<>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{donations.map(donation => (
					<div
						key={donation.id}
						className="card card-compact bg-base-100 rounded-lg hover:shadow-lg transition"
						style={{backgroundColor: `${donation.colorCard}`}}>
						<figure>
							<img className="w-full h-full" src={donation.picture} alt="" />
						</figure>
						<div className="card-body">
							<p
								className="badge rounded border-0 text-sm font-medium"
								style={{
									backgroundColor: `${donation.colorCategory}`,
									color: `${donation.colorText}`,
								}}>
								{donation.category}
							</p>
							<h2
								className="card-title text-xl font-semibold"
								style={{color: `${donation.colorText}`}}>
								{donation.title}
							</h2>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default DonationList;
