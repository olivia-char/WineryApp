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
						</div>
					</div>
					<div className="newMemberIcon"></div>
					<div className="newMemberIcon2"></div>
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
					<div className="benefitsIcon2"></div>
				</div>

				<div className="memberOptions">
					<h1>Membership Options</h1>

					<table>
						<tr>
							<th></th>
							<th className="tableCell">Petite Club</th>
							<th className="tableCell">Estate Club</th>
							<th className="tableCell">Collector Club</th>
						</tr>
						<tr>
							<td>Shipment</td>
							<td className="tableCell">6 Bottles</td>
							<td className="tableCell">8 Bottles</td>
							<td className="tableCell">12 Bottles</td>
						</tr>
						<tr>
							<td>Discount</td>
							<td className="tableCell">15% OFF</td>
							<td className="tableCell">20% OFF</td>
							<td className="tableCell">25% OFF</td>
						</tr>
						<tr>
							<td>Price Per Membership</td>
							<td className="tableCell">$349*</td>
							<td className="tableCell">$440*</td>
							<td className="tableCell" >$652*</td>
						</tr>
						<tr>
							<td>Shipment Schedule</td>
							<td className="tableCell">TBA</td>
							<td className="tableCell">TBA</td>
							<td className="tableCell">TBA</td>
						</tr>
						<tr >
							<td></td>
							<td><div className="memberButton"><a href="/register">Join Now</a></div></td>
							<td><div className="memberButton"><a href="/register">Join Now</a></div></td>
							<td><div className="memberButton"><a href="/register">Join Now</a></div></td>
						</tr>
					</table>
					<h5>*Plus Tax and Shipping</h5>
				</div>
			</div>
		)
	}
}
