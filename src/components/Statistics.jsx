import {useState, useEffect} from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import {getStoredDonation} from '../utilities/localStorage';

const Statistics = () => {
	const COLORS = ['#00C49F', '#FF444A'];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = (
		{cx, cy, midAngle, innerRadius, outerRadius, percent}
	) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? 'start' : 'end'}
				dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	const [allDonations, setDonations] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => setDonations(data));
	}, []);

	// const donationsTotal = allDonations.filter();

	let totalGiven = 0;

	const givenDonations = getStoredDonation();
	const given = givenDonations.map(d => (totalGiven += d));
	console.log(given);
	console.log(totalGiven);

	const data = [
		{name: 'Group A', value: allDonations.length},
		{name: 'Group B', value: givenDonations.length},
	];

	return (
		<>
			<div className="flex items-center flex-col mx-auto text-center">
				<PieChart width={400} height={400}>
					<Pie
						data={data}
						cx={200}
						cy={200}
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80}
						dataKey="value">
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
				<div className='flex justify-center flex-col md:flex-row gap-6'>
					<p className='text-xl'>
						Your Donation: <span className="text-[#FF444A]">◼</span>
					</p>
					<p className='text-xl'>
						Total Donation: <span className="text-[#00C49F]">◼</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Statistics;
