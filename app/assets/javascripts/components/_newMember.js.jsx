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
						<p>Glenét Vineyards Wines and Membership are for discerning wine aficionados looking for unique, small-lot, hand-crafted varietals grown, harvested, fermented, and bottled under boutique conditions to create a remarkable product. </p>
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
							<li>Enjoy a 15% Member discount when you order one Pinot Gris (2-pack), one Glenét Mélange (2-pack), and one Pinot Noir (4-pack) on your first order.</li>
							<li> Then, receive a 15% Member discount on any future 2 or 4-pack vintage order</li>
							<li>Be the first to receive our new release in your membership shipments.</li>
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
						<p>Price Per Shipment</p>
						<p>Shipment Schedule</p>
					</div>
					<div className="introEstate">
						<p>2 bottles</p>
						<p>15 off</p>
						<p>80*</p>
						<p>Febuary, May and November</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<div className="estate">
						<p>4 bottles</p>
						<p>20 off</p>
						<p>180*</p>
						<p>Febuary, May and November</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<div className="collector">
						<p>6 bottles</p>
						<p>25 off</p>
						<p>280*</p>
						<p>Febuary, May and November</p>
						<div className="memberButton"><a href="/register">Join Now</a></div>
					</div>
					<h5>*Plus Tax and Shipping</h5>
				</div>
			</div>
		)
	}
}