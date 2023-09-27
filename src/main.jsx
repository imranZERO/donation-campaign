import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './components/Home.jsx';
import Statistics from './components/Statistics.jsx';
import GivenDonations from './components/GivenDonations.jsx';
import ErrorPage from './components/error-page.jsx';
import DonationDetails from './components/DonationDetails.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/donation',
				element: <GivenDonations></GivenDonations>,
			},
			{
				path: '/statistics',
				element: <Statistics></Statistics>,
			},
			{
				path: '/donations/:id',
				element: <DonationDetails></DonationDetails>,
				loader: () => fetch('/data.json')
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
