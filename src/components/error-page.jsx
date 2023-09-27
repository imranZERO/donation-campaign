import {useNavigate, useRouteError} from 'react-router-dom';
import Header from './Header';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<>
			<Header></Header>
			<div
				id="error-page"
				className="max-w-md mx-auto my-12 text-center text-xl">
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p className="font-bold mt-4">
					<i>{error.statusText || error.message}</i>
				</p>
				<button onClick={handleGoBack} className="btn btn-neutral my-8">
					Go Back
				</button>
			</div>
		</>
	);
}
