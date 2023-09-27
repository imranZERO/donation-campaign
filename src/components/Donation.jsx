import {useNavigate} from 'react-router-dom';

const Donation = ({donation}) => {
	const {
		id,
		title,
		picture,
		category,
		colorCard,
		colorText,
		colorCategory,
	} = donation;

	const navigate = useNavigate();
	const handleShowDetail = () => {
		navigate(`/donations/${id}`);
	};

	return (
		<>
			<div
				onClick={handleShowDetail}
				key={id}
				className="card card-compact bg-base-100 rounded-lg hover:shadow-lg transition cursor-pointer"
				style={{backgroundColor: `${colorCard}`}}>
				<figure>
					<img className="w-full h-full" src={picture} alt="" />
				</figure>
				<div className="card-body">
					<p
						className="badge rounded border-0 text-sm font-medium"
						style={{
							backgroundColor: `${colorCategory}`,
							color: `${colorText}`,
						}}>
						{category}
					</p>
					<h2
						className="card-title text-xl font-semibold"
						style={{color: `${colorText}`}}>
						{title}
					</h2>
				</div>
			</div>
		</>
	);
};

export default Donation;
