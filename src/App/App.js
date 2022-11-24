import React, { Component } from "react"; 
import {
	Route, Routes,
	HashRouter,
	NavLink
} from "react-router-dom";
import "./App.css"
import Home from "../components/Home/Home";
import About from "../components/About";
import Store from "../components/Store";
import Events from "../components/Events";
import Influencers from "../components/Influencers";

class App extends Component {
    render() {
        return (
		<div className="page-body">
			<HashRouter>
					<header id="nav">
					<h1 id="title">T29 Apparel</h1>
				{ /* <!-- Line separating   title from Nav--> */ }
					<div className="navContainer">
						<div className="navBar"></div> 
						<div className="space1"></div>
						<div className="navBar3"></div>
						<div className="space2"></div>
						<div className="navBar5"></div>
						<div className="triangleContainer">
							<div class="triangle"></div>
						</div>
					</div>
				{ /* <!--Nav Items-->  */ }
					<div id="nav-links">
						<NavLink to="/">Home</NavLink>
						<div className="itemSpace"></div>
						<NavLink to="/about">About</NavLink>
						<div className="itemSpace"></div>
						<NavLink to="/Store">Store</NavLink>
						<div className="itemSpace"></div>
						<NavLink to="/Events">Events</NavLink>
						<div className="itemSpace"></div>
						<NavLink to="/Influencers">Influencers</NavLink>
					</div>
				</header>
			{ /* <!-- Page Content --> */ }
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Home />}/>
						<Route exact path="/about" element={<About />}/>
						<Route exact path="/store" element={<Store />}/>
						<Route exact path="/events" element={<Events />}/>
						<Route exact path="/influencers" element={<Influencers />}/>
					</Routes>
				</div>
				<footer>
					<div className="footer-links">
						<a href="#">T29 Apparel</a>
						<br/>
						<a href="#">Support</a>
					</div>
					<div className="newsletter">
						<h6>Sign up for our newsletter</h6>
						<input type="text" value="Enter your Email"></input>
						<button>Sign up</button>
					</div>
				</footer>
			</HashRouter>
		</div>
		)
    }
}

export default App; 