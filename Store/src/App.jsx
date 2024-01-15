import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";
import { getCategories } from "./features/categories/categoriesSlice";

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

  return (
	<div className="app">
		<div className="container">
			<Header />

			<div className="main">
				<Sidebar />
				
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	</div>
  )
}

export default App
