import toast from 'react-hot-toast';

const getStoredDonation = () => {
	const storedDonations = localStorage.getItem('donations');
	if (storedDonations) {
		return JSON.parse(storedDonations);
	}
	return [];
};

const saveDonation = id => {
	const storedDonations = getStoredDonation();
	const exists = storedDonations.find(donationId => donationId === id);
	if (exists) {
		toast.error('Donation Already Given!');
	} else {
		storedDonations.push(id);
		localStorage.setItem('donations', JSON.stringify(storedDonations));
		toast.success('Donated Successfully!');
	}
};

export {getStoredDonation, saveDonation};
