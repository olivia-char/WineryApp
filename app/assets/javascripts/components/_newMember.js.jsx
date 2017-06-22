class NewMember extends React.Component {
	constructor(props) {
    	super(props);
    }
	render(){
		return (
			<div className="membership">
				<div className="newMember">
					<div className="newMemberImg"></div>
					<div className="newMemberBox">
						<h1>Become a <b>Glenét Vineyards</b> Member</h1>
						<p>Glenét Vineyards Wines and Membership are for discerning wine aficionados looking for unique, small-lot, handcrafted varietals grown, harvested, fermented, and bottled under boutique conditions to create a remarkable product. </p>
						<div className="joinBox">
							<a href="/register" className="buyButton">Join Now</a>
							<p>Already a member? <a href="#">Login</a> now.</p>
						</div>
					</div>
				</div>

				<div className="memberBenefits">
					<div className="benefitsImg"></div>
					<div className="benefits">
						<h1>Membership Benefits</h1>
						<ul>
							<li> Receive a 10% Member discount on any future single vintage orders.</li>
							<li>Be the first to receive our new releases in your membership shipments.</li>
							<li>No cost to join and no monthly membership fees.</li>
						</ul>
						<a href="/register">Join Now</a>
					</div>
				</div>

				<div className="memberOptions">
					<h1>Membership Options</h1>
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
						<p>15 off</p>
						<p>$349*</p>
						<p>October 2016, March 2017, June 2017</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<div className="estate">
						<p>8 bottles</p>
						<p>20 off</p>
						<p>$440*</p>
						<p>October 2016, March 2017, June 2017</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<div className="collector">
						<p>12 bottles (Case)</p>
						<p>25 off</p>
						<p>$652*</p>
						<p>October 2016, March 2017, June 2017</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<h5>*Plus Tax and Shipping</h5>
				</div>
			</div>
		)
	}
}