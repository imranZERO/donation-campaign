import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './components/Home.jsx';
import Donation from './components/Donation.jsx';
import Statistics from './components/Statistics.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/donation',
				element: <Donation></Donation>,
			},
			{
				path: '/statistics',
				element: <Statistics></Statistics>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
