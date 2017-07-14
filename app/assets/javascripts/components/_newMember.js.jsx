class NewMember extends React.Component {
	constructor(props) {
    	super(props);
    }
	render(){
		return (
			<div className="membership">
				<div className="newMemberIntro">
					<div className="newMemberImg"></div>
					<div className="newMemberBox">
						<h1>Become a <b>Glenét Vineyards</b> Member</h1>
						<p>Glenét Vineyards Membership is a limited expeirence we trust you will enjoy. </p>
						<div className="joinBox">
							<a href="/register" className="buyButton">Join Now</a>
							<p>Already a member? <a href="/shop/user/spree_user/sign_in">Login</a> now.</p>
						</div>
					</div>
					<div className="newMemberIcon"></div>
				</div>

				<div className="memberBenefits">
					<div className="benefitsImg"></div>
					<div className="benefits">
						<h1>Membership Benefits</h1>
						<ul>
							<li>Instant Member Discounts on future purchases</li>
							<li>Special Glenét Winery Event Invitations</li>
							<li>One Annual Membership Fee</li>
						</ul>
						<a href="/register">Join Now</a>
					</div>
					<div className="benefitsIcon"></div>
				</div>

				<div className="memberOptions">
					<h1>Membership Options</h1>
					<div className="membershipOptionsIcon"></div>
					<div className="clubTitle">
						<p>Petite Club</p>
						<p>Estate Club</p>
						<p>Collector Club</p>
					</div>
					<div className="clubInfo">
						<p>Shipment</p>
						<p>Discount</p>
						<p>Price Per Membership</p>
						<p>Shipment Schedule</p>
					</div>
					<div className="introEstate">
						<p>6 bottles</p>
						<p>15% off</p>
						<p>$349*</p>
						<p>October 2017, March 2018, June 2018</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<div className="estate">
						<p>8 bottles</p>
						<p>20% off</p>
						<p>$440*</p>
						<p>October 2017, March 2018, June 2018</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<div className="collector">
						<p>12 bottles</p>
						<p>25% off</p>
						<p>$652*</p>
						<p>October 2017, March 2018, June 2018</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<h5>*Plus Tax and Shipping</h5>
				</div>
			</div>
		)
	}
}