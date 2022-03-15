import './App.css';
import Navigation from './components/layouts/navigation';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/signin';

export default function App() {
	return (
		<div>		
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="signin" element={<SignIn />} />
			</Routes>	
		</div>
	)
}