import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBarLst1 extends Component {
	render() {
		const anchor = [
			{
				icon: (
					<img
						src='images/icon-diamond.svg'
						alt=''
					/>
				),
				label: "Talent Profile",
				link: "/"
			}
		];
		return <SideBarMenu1 links={anchor} />;
	}
}

class SideBarLst2 extends Component {
	render() {
		const anchor = [
			{
				icon: (
					<img
						src='images/icon-list.svg'
						alt=''
					/>
				),
				label: "Lists",
				link: "/lists"
			},
			{
				icon: (
					<img
						src='images/icon-bar.svg'
						alt=''
					/>
				),
				label: "Campaigns (CMPs)",
				link: "/campaigns"
			},
			{
				icon: (
					<img
						src='images/icon-mobile.svg'
						alt=''
					/>
				),
				label: "Social Posts",
				link: "/social-posts"
			}
		];
		return <SideBarMenu2 links={anchor} />;
	}
}

class SideBarLst3 extends Component {
	render() {
		const anchor = [
			{
				icon: (
					<img
						src='images/icon-cog.svg'
						alt=''
					/>
				),
				label: "Segmentation",
				link: "/segmentation"
			}
		];
		return <SideBarMenu3 links={anchor} />;
	}
}

class SideBarMenu1 extends Component {
	render() {
		const SideBarItm1 = this.props.links.map((v, i) => {
			return (
				<li key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			);
		});
		return <ul>{SideBarItm1}</ul>;
	}
}

class SideBarMenu2 extends Component {
	render() {
		const SideBarItm2 = this.props.links.map((v, i) => {
			return (
				<li key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			);
		});
		return <ul>{SideBarItm2}</ul>;
	}
}

class SideBarMenu3 extends Component {
	render() {
		const SideBarItm3 = this.props.links.map((v, i) => {
			return (
				<li key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			);
		});
		return <ul>{SideBarItm3}</ul>;
	}
}

class Sidebar extends Component {
	render() {
		return (
			<aside id='sidebar'>
				<h4>Profiles</h4>
				<SideBarLst1 />
				<h4>Tracking</h4>
				<SideBarLst2 />
				<h4>Settings</h4>
				<SideBarLst3 />
			</aside>
		);
	}
}

export default Sidebar;
