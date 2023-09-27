import {useLoaderData, useParams} from 'react-router-dom';

const DonationDetails = () => {
	const donations = useLoaderData();
	const {id} = useParams();
	const idInt = parseInt(id);
	const donation = donations.find(donation => donation.id === idInt);
	const {title, picture, description, price, colorText} = donation;

	return (
		<div className="max-w-[1366px] mb-12">
			<div className="w-full mb-8 relative">
				<img
					className="w-full mx-auto rounded-xl lg:rounded-3xl"
					src={picture}
					alt=""
				/>
				<div className="w-full absolute bottom-0 p-4 md:p-8 bg-black bg-opacity-50 rounded-b-xl lg:rounded-b-3xl">
					<button
						className="btn btn-neutral lg:btn-lg text-white capitalize text-lg font-semibold border-0"
						style={{backgroundColor: `${colorText}`}}>
						Donate ${price}
					</button>
				</div>
			</div>
			<h1 className="mt-12 text-4xl text-[#0B0B0B] font-bold">{title}</h1>
			<p className="mt-6 text-lg text-[#0B0B0BB2]">{description}</p>
		</div>
	);
};

export default DonationDetails;
