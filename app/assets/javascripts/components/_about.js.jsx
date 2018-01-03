

class About extends React.Component {
	constructor(props) {
    	super(props);
    }

	render(){
		return (
			<div className="aboutBox">
				<div className="ourStoryIntro">
					<div className="introIcon"></div>
					<div className="introImg"></div>
					<div className="aboutIntro">
						<h1>Terre of <b>Glen Ellen</b></h1>
						<p>Overwhelmed by its natural beauty and mesmerized by its stunning mountain and vineyard vistas, we settled in Glen Ellen&rsquo;s Sonoma Valley Appellation in 1998. Soon after, we planted our Glenét Vineyards on a flowing valley terre, excellent for growing quality wines fully accentuated by the ideal climate of Sonoma Valley&rsquo;s Viticulture Area.</p>
						<p>In 2002, we planted our first two vineyards, a <i>Pinot Gris</i> block and our own unique red blend designate <i>Glenét Mélange,</i> a mixture of 80% Cabernet Sauvignon (three varietals) and 5% each of Petit Verdot, Merlot, Cabernet Franc, and Syrah.</p>
						<p>In 2016, we complimented our <i>Estate Pinot Gris</i> and <i>Glenét Mélange</i> varietals with a <i>Pinot Noir</i> whose fruit we source from neighboring vineyards, also within our Sonoma Valley Appellation.</p>
					</div>
				</div>
				<div className="ourBio">
					<div className="bio1">
						<div className="bioPicJohn"></div>
						<p>John Stalcup</p>
						<h4>Field Nurturer &amp; Winemaker</h4>
						<p>He is out standing in his field!</p>
					</div>
					<div className="bio2">
						<div className="bioPicJulia"></div>
						<p>Julia McCarthy</p>
						<h4>Chief Wine Aficionado</h4>
						<p>Behind every successful endeavor, there is always one smart person!</p>
					</div>
				</div>
				<div className="ourWine">
					<div className="ourWineImg"></div>
					<div className="ourWineBox">
						<h1>The Cultivation of <b>Glenét Vineyards</b></h1>
						<p>We handcraft each of our vintages to create the very best of what the land and nature provides in this idylic setting, capturing some of the best fruit from its earth and sunlight.</p>
						<p>Our <i>Pinot Gris, Glenét Mélange, and Pinot Noir</i> wines are tended from bud break to harvest, organically nutured and carefully groomed to generate robust fruit with outstanding tastes and flavors, clearly setting our wines apart from larger productions.</p>
						<p>To maintain this level of precision, our boutique wine case production results in just 25 to 100 cases per varietal per year.</p>
						<p>We are certain you&rsquo;ll consider Glenét Vineyard wines to be some of the finest available from the Sonoma Valley Appellation. It&rsquo;s our privilege to share them with you.</p>
						<p>Cheers!</p>
					</div>

				</div>
			</div>
		)
	}
}
