
var NewMember = React.createClass({
	render(){
		return (
			<div className="membership">
				<div className="newMember">
					<div className="newMemberImg"></div>
					<div className="newMemberBox">
						<h1>Become a <b>Glenét Vineyards</b> Member</h1>
						<h3>THis is a line about discovering the amazingness of the Glenét Vineyards Wine Membership</h3>
						<div className="joinBox">
							<button><a href="#">Join Now</a></button>
							<p>Already a member? <a href="#">Login</a> now.</p>
						</div>
					</div>
				</div>

				<div className="memberBenefits">
					<h1>Membership Benefits</h1>
					<ul>
						<li>Enjoy a 15% Member discount when you order one Pinot Gris (2-pack), one Glenét Mélange (2-pack), and one Pinot Noir (4-pack) on your first order.</li>
						<li> Then, receive a 15% Member discount on any future 2 or 4-pack vintage order</li>
						<li>Be the first to receive our new release in your membership shipments.</li>
						<li>No cost to join and no monthly membership fees.</li>
					</ul>
					<button>Join Now</button>
				</div>
			</div>
		)
	}
})