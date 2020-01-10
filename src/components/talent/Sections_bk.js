import React, { Component, Fragment } from "react";
import MainTable from "./Table";

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
							Export to
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
				heading: "All Talent",
				price: "4"
			},
			{
				heading: "Vetted Talent (Yes)",
				price: "2"
			},
			{
				heading: "Needs Vetting (No)",
				price: "2"
			}
		];
		return <DashLstBlk items={blocks} />;
	}
}

class DashLstBlk extends Component {
	render() {
		const DashLstBlkItm = this.props.items.map((v, i) => {
			return (
				<li key={i}>
					<div className='inner'>
						<strong>
							{
								v.heading
							}
						</strong>
						<div className='price'>
							{v.price}
						</div>
					</div>
				</li>
			);
		});
		return <ul className='dashLst'>{DashLstBlkItm}</ul>;
	}
}

class HeadBlk extends Component {
	render() {
		// let el = document.getElementById("blockLst");
		// this.state.listView
		// 	? el.classList("blockLst gridView")
		// 	: el.classList("blockLst");
		// if (this.state.gridView) {
		// 	el.classList.add("gridView");
		// }
		return (
			<div className='headBlk'>
				<div className='miniDv'>
					<strong>Sort:</strong>
					<select
						name=''
						id=''
						className='txtBox'
					>
						<option value='0'>
							All
						</option>
						<option value='0'>
							1
						</option>
						<option value='0'>
							2
						</option>
						<option value='0'>
							3
						</option>
						<option value='0'>
							4
						</option>
						<option value='0'>
							5
						</option>
					</select>
				</div>
				<div className='miniDv'>
					<strong>Filter:</strong>
					<select
						name=''
						id=''
						className='txtBox'
					>
						<option value='0'>
							All
						</option>
						<option value='0'>
							1
						</option>
						<option value='0'>
							2
						</option>
						<option value='0'>
							3
						</option>
						<option value='0'>
							4
						</option>
						<option value='0'>
							5
						</option>
					</select>
				</div>
				<div className='miniDv'>
					<input
						type='text'
						name=''
						id=''
						className='txtBox'
						placeholder='Search'
					/>
				</div>
				<div className='miniDv viewList'>
					<strong>View:</strong>
					<div
						id='listView'
						className='active'
						onClick={
							this
								.listView
						}
					></div>
					<div
						id='gridView'
						onClick={
							this
								.gridView
						}
					></div>
					<div
						id='cardView'
						onClick={
							this
								.cardView
						}
					></div>
				</div>
				<div className='miniDv actionDv'>
					<strong>Actions:</strong>
					<ul className='miniLst flex semi'>
						<li>
							<button type='button'>
								Remove
							</button>
						</li>
						<li>
							<button type='button'>
								Select
								All
							</button>
						</li>
						<li>
							<button type='button'>
								Deselect
								All
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const BtmBlk = () => {
	return (
		<div className='btmBlk'>
			<ul className='pagination'>
				<li>
					<a href='?'>&lsaquo;</a>
				</li>
				<li>
					<a href='?'>&laquo;</a>
				</li>
				<li>
					<a href='?'>1</a>
				</li>
				<li>
					<a
						href='?'
						className='active'
					>
						2
					</a>
				</li>
				<li>
					<a href='?'>3</a>
				</li>
				<li>
					<a href='?'>4</a>
				</li>
				<li>
					<a href='?'>5</a>
				</li>
				<li>
					<a href='?'>6</a>
				</li>
				<li>
					<a href='?'>...</a>
				</li>
				<li>
					<a href='?'>&rsaquo;</a>
				</li>
				<li>
					<a href='?'>&raquo;</a>
				</li>
			</ul>
			<div className='lngthItm'>
				<select
					name=''
					id=''
					className='txtBox'
				>
					<option value='0'>10</option>
					<option value='0'>15</option>
					<option value='0'>20</option>
					<option value='0'>25</option>
				</select>
				Displaying <em>1</em> - <em>4</em> of 4
				records
			</div>
		</div>
	);
};

class BlockLst extends Component {
	state = {
		// listView: false,
		// gridView: false,
		cardView: false
	};
	// listView = () => {
	// 	this.setState({
	// 		listView: !this.state.listView
	// 	});
	// };
	// gridView = () => {
	// 	this.setState({
	// 		gridView: !this.state.gridView
	// 	});
	// };
	cardView = () => {
		this.setState({
			cardView: !this.state.cardView
		});
	};
	render() {
		return (
			<div
				className={
					this.props.cardView
						? "blockLst"
						: "blockLst cardLst"
				}
				id='blockLst'
			>
				<MainTable />
				<BtmBlk />
			</div>
		);
	}
}

const BlockDv = () => {
	return (
		<div className='blk'>
			<HeadBlk />
			<BlockLst />
		</div>
	);
};

const Sections = () => {
	return (
		<Fragment>
			<TopHead />
			<DashLst />
			<BlockDv />
		</Fragment>
	);
};

export default Sections;
