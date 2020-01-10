import React, { Component, Fragment } from "react";
import BlockDv from "./Block";

class Sections extends Component {
	render() {
		const TopHead = () => {
			return (
				<div className='topHead'>
					<h2>All Talent</h2>
					<div className='bTn'>
						<button
							type='button'
							className='webBtn'
							id='button'
						>
							<i className='fi-plus'></i>
							New Talent
						</button>
					</div>
					<div className='more'>
						<span></span>
						<ul>
							<li>
								<a href='?'>
									Export
									to
									CSV
								</a>
							</li>
						</ul>
					</div>
				</div>
			);
		};
		class DashLst extends Component {
			render() {
				const blocks = [
					{
						heading:
							"All Talent",
						price: "4"
					},
					{
						heading:
							"Vetted Talent (Yes)",
						price: "2"
					},
					{
						heading:
							"Needs Vetting (No)",
						price: "2"
					}
				];
				return <DashLstBlk items={blocks} />;
			}
		}
		class DashLstBlk extends Component {
			render() {
				const DashLstBlkItm = this.props.items.map(
					(v, i) => {
						return (
							<li
								key={
									i
								}
							>
								<div className='inner'>
									<strong>
										{
											v.heading
										}
									</strong>
									<div className='price'>
										{
											v.price
										}
									</div>
								</div>
							</li>
						);
					}
				);
				return (
					<ul className='dashLst'>
						{DashLstBlkItm}
					</ul>
				);
			}
		}

		return (
			<Fragment>
				<TopHead />
				<DashLst />
				<BlockDv />
			</Fragment>
		);
	}
}

// const Sections = () => {
// 	return (
// 		<Fragment>
// 			<TopHead />
// 			<DashLst />
// 			<BlockDv />
// 		</Fragment>
// 	);
// };

export default Sections;
