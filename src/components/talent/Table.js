import React, {Fragment} from "react";

const MainTable = () => {
	const TableH = () => {
		return (
			<thead>
				<tr>
					<th width="10"><input type="checkbox"/></th>
					<th width="10">#</th>
					<th>Links</th>
					<th width="40">Photo</th>
					<th>Name</th>
					<th>CMPs</th>
					<th>Persona</th>
					<th>Categories</th>
					<th>IG <em>Followers</em></th>
					<th>IG <em>ENG %</em></th>
					<th>YT <em>Subscribers</em></th>
					<th>YT <em>ENG %</em></th>
					<th>Vetted</th>
					<th width="10">Actions</th>
				</tr>
			</thead>
		);
	};
	const TableB = () => {
		return (
			<Fragment>
				<tbody>
					<tr>
						<td><input type="checkbox"/></td>
						<td>1</td>
						<td>
							<ul className="socialBtn">
								<li className="active"><a href="/" className="icon-fuel" target="_blank"></a></li>
								<li><a href="/" className="icon-twitter" target="_blank"></a></li>
								<li className="active"><a href="/" className="icon-instagram" target="_blank"></a></li>
								<li><a href="/" className="icon-linkedin" target="_blank"></a></li>
							</ul>
						</td>
						<td><img src="images/avatar1.jpg" alt="" className="sDp" /></td>
						<td>Cameron Schiller</td>
						<td>4</td>
						<td>Web Designer</td>
						<td>
							<ul className="tagLst">
								<li><span>Web Design</span></li>
								<li><span>Web Development</span></li>
								<li className="dropbox">
									<span>+ more</span>
									<ul>
										<li><span>HTML 5</span></li>
										<li><span>CSS 3</span></li>
										<li><span>Bootstrap</span></li>
										<li><span>JQuery</span></li>
									</ul>
								</li>
							</ul>
						</td>
						<td>2,436</td>
						<td>3.2%</td>
						<td>137,547</td>
						<td>14.5%</td>
						<td>Yes</td>
						<td>
							<div className="more">
								<span></span>
								<ul>
									<li><a href="profile.html">View Profile</a></li>
									<li><a href="/">Edit Profile</a></li>
									<li><a href="/">Refresh Social</a></li>
									<li><a href="/">Export to CSV</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan="4"></td>
						<td colSpan="10">
							<table>
								<tbody>
									<tr>
										<td>
											<div className="imgLst">
												<img src="images/1.jpg" alt=""/>
												<img src="images/2.jpg" alt=""/>
												<img src="images/3.jpg" alt=""/>
												<img src="images/4.jpg" alt=""/>
												<img src="images/5.jpg" alt=""/>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td><input type="checkbox"/></td>
						<td>2</td>
						<td>
							<ul className="socialBtn">
								<li><a href="/" className="icon-fuel" target="_blank"></a></li>
								<li className="active"><a href="/" className="icon-twitter" target="_blank"></a></li>
								<li className="active"><a href="/" className="icon-instagram" target="_blank"></a></li>
								<li><a href="/" className="icon-linkedin" target="_blank"></a></li>
							</ul>
						</td>
						<td><img src="images/avatar2.jpg" alt="" className="sDp" /></td>
						<td>Jennifer Kem</td>
						<td>4</td>
						<td>Illustrator</td>
						<td>
							<ul className="tagLst">
								<li><span>Illustration</span></li>
								<li className="dropbox">
									<span>+ more</span>
									<ul>
										<li><span>HTML 5</span></li>
										<li><span>CSS 3</span></li>
										<li><span>Bootstrap</span></li>
										<li><span>JQuery</span></li>
									</ul>
								</li>
							</ul>
						</td>
						<td>2,436</td>
						<td>3.2%</td>
						<td>137,547</td>
						<td>14.5%</td>
						<td>Yes</td>
						<td>
							<div className="more">
								<span></span>
								<ul>
									<li><a href="profile.html">View Profile</a></li>
									<li><a href="/">Edit Profile</a></li>
									<li><a href="/">Refresh Social</a></li>
									<li><a href="/">Export to CSV</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan="4"></td>
						<td colSpan="10">
							<table>
								<tbody>
									<tr>
										<td>
											<div className="imgLst">
												<img src="images/6.jpg" alt=""/>
												<img src="images/7.jpg" alt=""/>
												<img src="images/8.jpg" alt=""/>
												<img src="images/9.jpg" alt=""/>
												<img src="images/10.jpg" alt=""/>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td><input type="checkbox"/></td>
						<td>3</td>
						<td>
							<ul className="socialBtn">
								<li><a href="/" className="icon-fuel" target="_blank"></a></li>
								<li className="active"><a href="/" className="icon-twitter" target="_blank"></a></li>
								<li><a href="/" className="icon-instagram" target="_blank"></a></li>
								<li><a href="/" className="icon-linkedin" target="_blank"></a></li>
							</ul>
						</td>
						<td><img src="images/avatar3.jpg" alt="" className="sDp" /></td>
						<td>Sasha Grey</td>
						<td>4</td>
						<td>Programmer</td>
						<td>
							<ul className="tagLst">
								<li><span>React JS</span></li>
								<li><span>Web Development</span></li>
								<li className="dropbox">
									<span>+ more</span>
									<ul>
										<li><span>Bootstrap</span></li>
										<li><span>JQuery</span></li>
									</ul>
								</li>
							</ul>
						</td>
						<td>2,436</td>
						<td>3.2%</td>
						<td>137,547</td>
						<td>14.5%</td>
						<td>Yes</td>
						<td>
							<div className="more">
								<span></span>
								<ul>
									<li><a href="profile.html">View Profile</a></li>
									<li><a href="/">Edit Profile</a></li>
									<li><a href="/">Refresh Social</a></li>
									<li><a href="/">Export to CSV</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan="4"></td>
						<td colSpan="10">
							<table>
								<tbody>
									<tr>
										<td>
											<div className="imgLst">
												<img src="images/11.jpg" alt=""/>
												<img src="images/12.jpg" alt=""/>
												<img src="images/13.jpg" alt=""/>
												<img src="images/14.jpg" alt=""/>
												<img src="images/15.jpg" alt=""/>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td><input type="checkbox"/></td>
						<td>4</td>
						<td>
							<ul className="socialBtn">
								<li><a href="/" className="icon-fuel" target="_blank"></a></li>
								<li><a href="/" className="icon-twitter" target="_blank"></a></li>
								<li><a href="/" className="icon-instagram" target="_blank"></a></li>
								<li className="active"><a href="/" className="icon-linkedin" target="_blank"></a></li>
							</ul>
						</td>
						<td><img src="images/avatar4.jpg" alt="" className="sDp" /></td>
						<td>Samira Jones</td>
						<td>4</td>
						<td>Photographer</td>
						<td>
							<ul className="tagLst">
								<li><span>Photography</span></li>
							</ul>
						</td>
						<td>2,436</td>
						<td>3.2%</td>
						<td>137,547</td>
						<td>14.5%</td>
						<td>Yes</td>
						<td>
							<div className="more">
								<span></span>
								<ul>
									<li><a href="profile.html">View Profile</a></li>
									<li><a href="/">Edit Profile</a></li>
									<li><a href="/">Refresh Social</a></li>
									<li><a href="/">Export to CSV</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan="4"></td>
						<td colSpan="10">
							<table>
								<tbody>
									<tr>
										<td>
											<div className="imgLst">
												<img src="images/16.jpg" alt=""/>
												<img src="images/17.jpg" alt=""/>
												<img src="images/18.jpg" alt=""/>
												<img src="images/19.jpg" alt=""/>
												<img src="images/20.jpg" alt=""/>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td><input type="checkbox"/></td>
						<td>5</td>
						<td>
							<ul className="socialBtn">
								<li className="active"><a href="/" className="icon-fuel" target="_blank"></a></li>
								<li><a href="/" className="icon-twitter" target="_blank"></a></li>
								<li><a href="/" className="icon-instagram" target="_blank"></a></li>
								<li className="active"><a href="/" className="icon-linkedin" target="_blank"></a></li>
							</ul>
						</td>
						<td><img src="images/avatar5.jpg" alt="" className="sDp" /></td>
						<td>Johnathan Wick</td>
						<td>4</td>
						<td>Web Designer</td>
						<td>
							<ul className="tagLst">
								<li><span>PHP</span></li>
								<li><span>Python</span></li>
								<li className="dropbox">
									<span>+ more</span>
									<ul>
										<li><span>HTML 5</span></li>
										<li><span>CSS 3</span></li>
									</ul>
								</li>
							</ul>
						</td>
						<td>2,436</td>
						<td>3.2%</td>
						<td>137,547</td>
						<td>14.5%</td>
						<td>Yes</td>
						<td>
							<div className="more">
								<span></span>
								<ul>
									<li><a href="profile.html">View Profile</a></li>
									<li><a href="/">Edit Profile</a></li>
									<li><a href="/">Refresh Social</a></li>
									<li><a href="/">Export to CSV</a></li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<td colSpan="4"></td>
						<td colSpan="10">
							<table>
								<tbody>
									<tr>
										<td>
											<div className="imgLst">
												<img src="images/2.jpg" alt=""/>
												<img src="images/8.jpg" alt=""/>
												<img src="images/11.jpg" alt=""/>
												<img src="images/15.jpg" alt=""/>
												<img src="images/6.jpg" alt=""/>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</Fragment>
		);
	};
	return (
		<table className="mini">
			<TableH />
			<TableB />
		</table>
	);
};

export default MainTable;
