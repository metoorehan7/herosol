import React from "react";

const HeadDv = () => {
	return (
        <div className="headDv">
            <ul className="tabLst">
                <li className="active">General</li>
                <li>Segmentation</li>
                <li>Social</li>
                <li>Work</li>
            </ul>
            <div className="bTn"><button type="button" className="webBtn">Save</button></div>
        </div>
    );
}

const Fieldset1 = () => {
	return (
        <fieldset className="active">
            <h3>Personal Info</h3>
            <div className="row formRow">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12 txtGrp">
                    <div className="inlineFrm">
                        <h4>Photo</h4>
                        <div className="dpDv txtBox"><i className="fi-plus"></i></div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xx-8 txtGrp">
                    <div className="inlineFrm">
                        <h4>Talent Type</h4>
                        <button className="txtBox">Seller</button>
                        <button className="txtBox">Influencer</button>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Name</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="enter your name" />
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Phone</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="(xxx) xxx-xxxx" />
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Email</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="enter your email" />
                        <button type="button" className="webBtn addBtn"><i className="fi-plus"></i></button>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12 txtGrp">
                    <div className="inlineFrm">
                        <h4>Bio</h4>
                        <textarea name="" id="" className="txtBox" placeholder="add description"></textarea>
                    </div>
                </div>
            </div>
            <h3>Personal Info</h3>
            <div className="row formRow">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xx-8 txtGrp">
                    <div className="inlineFrm">
                        <h4>Vetted</h4>
                        <button className="txtBox">Yes</button>
                        <button className="txtBox">No</button>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Recommended by</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="enter name" />
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Tier</h4>
                        <select name="" id="" className="txtBox">
                            <option value="0">choose tier</option>
                            <option value="0">1</option>
                            <option value="0">2</option>
                            <option value="0">3</option>
                            <option value="0">4</option>
                            <option value="0">5</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Badges</h4>
                        <div className="flexGrp">
                            <ul className="badgeLst flex">
                                <li>
                                    <div className="icon">
                                        <input type="checkbox" name="" id="" />
                                        <img src="images/badge1.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <input type="checkbox" name="" id="" />
                                        <img src="images/badge2.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <input type="checkbox" name="" id="" />
                                        <img src="images/badge3.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <input type="checkbox" name="" id="" />
                                        <img src="images/badge4.png" alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <input type="checkbox" name="" id="" />
                                        <img src="images/badge5.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Alerts</h4>
                        <select name="" id="" className="txtBox">
                            <option value="0">select an alert</option>
                            <option value="0">1</option>
                            <option value="0">2</option>
                            <option value="0">3</option>
                            <option value="0">4</option>
                            <option value="0">5</option>
                        </select>
                    </div>
                    <ul className="alertBlks">
                        <li>
                            Lorem, ipsum dolor sit amet.
                            <em className="date">11/12/19</em>
                            <i className="fi-trash"></i>
                        </li>
                        <li>
                            Elit ipsum dolor sit amet consectetur.
                            <em className="date">11/12/19</em>
                            <i className="fi-trash"></i>
                        </li>
                        <li>
                            Consectetur adipisicing sit amet.
                            <em className="date">11/12/19</em>
                            <i className="fi-trash"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Notes</h4>
                        <textarea name="" id="" className="txtBox" placeholder="add a note"></textarea>
                    </div>
                    <ul className="alertBlks">
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam doloremque optio deserunt sequi aliquid, architecto voluptates expedita dignissimos ut blanditiis rerum beatae veniam error fugit. Doloremque nobis culpa eos consectetur!
                            <em className="date">11/12/19</em>
                            <i className="fi-trash"></i>
                        </li>
                        <li>
                            Doloremque nobis culpa eos consectetur! architecto voluptates expedita dignissimos ut blanditiis rerum beatae veniam error fugit.
                            <em className="date">11/12/19</em>
                            <i className="fi-trash"></i>
                        </li>
                        <li>
                            Aliquam doloremque optio deserunt sequi aliquid, architecto voluptates expedita dignissimos ut blanditiis rerum beatae veniam error fugit. Doloremque nobis culpa eos consectetur!
                            <em className="date">11/12/19</em>
                            <i className="fi-trash"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </fieldset>
    );
}

const Fieldset2 = () => {
	return (
        <fieldset>
            <h3>Segmentation</h3>
            <div className="row formRow">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Talent ID</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="123744" />
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Persona</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="enter persona" />
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Tags</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="Colorful" />
                        <button type="button" className="webBtn addBtn"><i className="fi-plus"></i></button>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Categories</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="Web Design" />
                        <button type="button" className="webBtn addBtn"><i className="fi-plus"></i></button>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

const Fieldset3 = () => {
	return (
        <fieldset>
            <h3>Profiles</h3>
            <div className="row formRow">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>FUEL Profile</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-fuel"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>FUEL Curated Store</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-fuel-store"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Instagram</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-instagram"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>YouTube</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-youtube"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Twitter</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-twitter"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Facebook</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-facebook"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>LinkedIn</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-linkedin"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Blog</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-blog"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Twitch</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-twitch"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Dribbble</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-dribbble"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Behance</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-behance"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Other</h4>
                        <div className="frmGrp">
                            <div className="frmAddon">
                                <span className="icon-other"></span>
                                <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

const Fieldset4 = () => {
	return (
        <fieldset>
            <h3>Work</h3>
            <div className="row formRow">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Portfolio</h4>
                        <div className="frmGrp">
                            <ul className="folioLst flex">
                                <li><div className="image txtBox"><i className="fi-plus"></i></div></li>
                                <li><div className="image txtBox"><i className="fi-plus"></i></div></li>
                                <li><div className="image txtBox"><i className="fi-plus"></i></div></li>
                                <li><div className="image txtBox"><i className="fi-plus"></i></div></li>
                                <li><div className="image txtBox"><i className="fi-plus"></i></div></li>
                                <li><div className="image txtBox"><i className="fi-plus"></i></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xx-10 txtGrp">
                    <div className="inlineFrm">
                        <h4>Gig Links</h4>
                        <input type="text" name="" id="" className="txtBox" placeholder="Enter a URL" />
                        <button type="button" className="webBtn addBtn"><i className="fi-plus"></i></button>
                    </div>
                </div>
            </div>
        </fieldset>
	);
};

const MainForm = () => {
    return(
        <form>
            <HeadDv />
            <Fieldset1 />
            <Fieldset2 />
            <Fieldset3 />
            <Fieldset4 />
        </form>
    )
}

const RightPop = () => {
    return(
        <div id="rightPop">
            <div className="crosBtn"></div>
            <h2>New Talent Profile</h2>
            <MainForm />
        </div>
    )
}

export default RightPop;
