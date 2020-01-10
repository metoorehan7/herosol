import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
	render() {
		const anchor1 = [
			{
				icon: (
					<img
						src={
							process
								.env
								.PUBLIC_URL +
							"/assets/images/icon-diamond.svg"
						}
						alt=''
					/>
				),
				label: "Talent Profile",
				link: "/",
				active: true
			}
		];
		const anchor2 = [
			{
				icon: (
					<img
						src={
							process
								.env
								.PUBLIC_URL +
							"/assets/images/icon-list.svg"
						}
						alt=''
					/>
				),
				label: "Lists",
				link: "/lists",
				active: false
			},
			{
				icon: (
					<img
						src={
							process
								.env
								.PUBLIC_URL +
							"/assets/images/icon-bar.svg"
						}
						alt=''
					/>
				),
				label: "Campaigns (CMPs)",
				link: "/campaigns",
				active: false
			},
			{
				icon: (
					<img
						src={
							process
								.env
								.PUBLIC_URL +
							"/assets/images/icon-mobile.svg"
						}
						alt=''
					/>
				),
				label: "Social Posts",
				link: "/social-posts",
				active: false
			}
		];
		const anchor3 = [
			{
				icon: (
					<img
						src={
							process
								.env
								.PUBLIC_URL +
							"/assets/images/icon-cog.svg"
						}
						alt=''
					/>
				),
				label: "Segmentation",
				link: "/segmentation",
				active: false
			}
		];
		return (
			<SideBarMenu
				links1={anchor1}
				links2={anchor2}
				links3={anchor3}
			/>
		);
	}
}

class SideBarMenu extends Component {
	render() {
		const SideBarItm1 = this.props.links1.map((v, i) => {
			return v.active ? (
				<li className='active' key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			) : (
				<li key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			);
		});
		const SideBarItm2 = this.props.links2.map((v, i) => {
			return v.active ? (
				<li className='active' key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			) : (
				<li key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			);
		});
		const SideBarItm3 = this.props.links3.map((v, i) => {
			return v.active ? (
				<li className='active' key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			) : (
				<li key={i}>
					<Link to={v.link}>
						{v.icon}
						<em>{v.label}</em>
					</Link>
				</li>
			);
		});
		return (
			<aside id='sidebar'>
				<h4>Profiles</h4>
				<ul>{SideBarItm1}</ul>
				<h4>Tracking</h4>
				<ul>{SideBarItm2}</ul>
				<h4>Settings</h4>
				<ul>{SideBarItm3}</ul>
			</aside>
		);
	}
}

export default Sidebar;
