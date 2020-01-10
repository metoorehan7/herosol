import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
	state = {
		count: 0,
		imgUrl: "assets/images"
	};
	render() {
		return (
			<div className='logo'>
				<Link to='/'>
					<img
						src={
							this.state
								.imgUrl +
							"/logo.svg"
						}
						alt=''
					/>
					{/* <img src='images/logo.svg' alt='Logo' /> */}
				</Link>
			</div>
		);
	}
}

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
	}
	moveBody = () => {
		const currentStatus = this.state.active;
		this.setState({
			active: !currentStatus
		});
	};
	render() {
		let el = document.getElementById("home-page");
		if (this.state.active) {
			el.classList.add("move");
		} else {
			el.classList.remove("move");
		}
		return (
			<div
				className=' toggle'
				id='toggle'
				onClick={this.moveBody}
			>
				<span></span>
			</div>
		);
	}
}

const TopSearch = () => {
	return (
		<form action='' method='post'>
			<input
				type='text'
				name=''
				id=''
				placeholder='Search'
				className='txtBox'
			/>
		</form>
	);
};

const ProDp = () => {
	return (
		<div className='proIco'>
			<div className='ico'>
				<img
					src={
						process.env
							.PUBLIC_URL +
						"/assets/images/user6.jpg"
					}
					alt=''
				/>
			</div>
			<ul>
				<li>
					<a href='?'>
						Profile Settings
					</a>
				</li>
				<li>
					<a href='?'>Membership</a>
				</li>
				<li>
					<a href='?'>Logout</a>
				</li>
			</ul>
		</div>
	);
};

const NotifyBtn = () => {
	return (
		<div id='notiBtn'>
			<a href='?'>
				<img
					src={
						process.env
							.PUBLIC_URL +
						"/assets/images/icon-bell.svg"
					}
					alt=''
				/>
			</a>
		</div>
	);
};

const Header = () => {
	return (
		<header>
			<Logo />
			<Toggle />
			<TopSearch />
			<ProDp />
			<NotifyBtn />
		</header>
	);
};

export default Header;
