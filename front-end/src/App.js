import { BrowserRouter,  Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext.js';
import React, { useState } from 'react'
import UserRoute from './utils/UserRoute'
import Ratings from './pages/Ratings'
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import MyBooksPage from './pages/MyBooksPage'
import HomePage from './pages/HomePage';
import ManageOrder from './pages/ManageOrder';
import SignupPage from './pages/SignupPage';
import CheckoutPage from './pages/CheckoutPage';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown.js';
import Orders from './pages/Orders.js';
import BookPage from './pages/BookPage.js'
import ShopPage from './pages/ShopPage.js'

const App = () => {

	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div class=' bg-gradient-to-tr from-white to-gray-200' >
			<BrowserRouter>
				<UserProvider>
					<Navbar toggle={toggle}/>
					<Dropdown isOpen={isOpen} toggle={toggle}/>
					<Route exact path='/ratings/:id' component={Ratings} />
					<Route path='/' component={HomePage} exact />
					<Route path='/login' component={LoginPage} />
					<Route path='/book/:isbn' component={BookPage} />
					<UserRoute component={MyBooksPage} path='/books'/>
					<Route path='/signup' component={SignupPage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/cart' component={Cart} />
					<Route path='/checkout' component={CheckoutPage}/>
					<Route path='/manageorder' component={ManageOrder}/>
					<Route path='/orders' component={Orders}/>
					<UserRoute component={DashboardPage} path='/dashboard'/>
				</UserProvider> 
				<Footer />
			</BrowserRouter>
		</div>
  );
}

export default App;