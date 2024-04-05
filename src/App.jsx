import { useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Register from './pages/login/Register';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPass from './pages/login/ForgotPass';
import Events from './pages/events/Events';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer';
import Contact from './pages/contact/Contact';
import LoginPage from './pages/login/LoginPage';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Profile from './pages/profile/Profile';
import Payment from './pages/payment/Payment';
import ResetPass from './pages/login/ResetPass';
import PassPayment from './pages/payment/PassPayment';
import Sponsors from './pages/sponsors/Sponsors';
import Admin from './pages/admin/Admin';
import LoginContext from './utils/loginContext/LoginContext';
import Landing from './pages/landing/Landing';
import Error from './pages/error/Error';

function App() {
	const loggedIn = useSelector((state) => state.cart.loginStatus);
	return (
		<LoginContext.Provider value={loggedIn}>
			<ToastContainer />
			<div className=" md:grid [&::-webkit-scrollbar]:[width:2px]">
				<Navbar />
				<div className="min-h-[80vh] pb-[4rem] mt-[4rem] grid items-center md:h-[100vh] appi [&::-webkit-scrollbar]:[width:2px] max-h-[-webkit-fill-available]">
					{/* <Suspense fallback={<Loader />}> */}
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route
							path="/forget-password/:token/:uid"
							element={<ResetPass />}
						/>
						<Route path="/login" element={<LoginPage />} />
						{<Route path="/events" element={<Events />} />}
						<Route path="/paymentpass" element={<PassPayment />} />
						<Route path="/register" element={<Register />} />
						<Route path="/forgotpass" element={<ForgotPass />} />
						{loggedIn && <Route path="/profile" element={<Profile />} />}
						<Route path="/adminhaiaap" element={<Admin />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/sponsors" element={<Sponsors />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/about" element={<About />}></Route>
						{loggedIn && <Route path="/payment" element={<Payment />} />}
						<Route path="*" element={<Error />} />
					</Routes>
					{/* </Suspense> */}
				</div>
				<Footer />
			</div>
		</LoginContext.Provider>
	);
}
export default App;
