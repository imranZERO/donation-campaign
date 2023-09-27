import {Outlet} from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header></Header>

			<main className="max-w-[1366px] mx-auto py-10 px-4">
				<Outlet></Outlet>
			</main>
		</>
	);
}

export default App;
