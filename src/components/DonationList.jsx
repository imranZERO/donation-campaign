import {useEffect, useState} from 'react';
import Donation from './Donation';

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
					<Donation key={donation.id} donation={donation}></Donation>
				))}
			</div>
		</>
	);
};

export default DonationList;
