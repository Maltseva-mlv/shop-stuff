import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  return (
	<div className="app">
		<div className="container">
			<Header />

			<div className="main">
				<Sidebar />
				
				<Routes>
					<Route element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	</div>
  )
}

export default App
