		// Closes the sidebar menu
		$("#menu-close").click(function(e) {
				e.preventDefault();
				$("#sidebar-wrapper").toggleClass("active");
		});

		// Opens the sidebar menu
		$("#menu-toggle").click(function(e) {
				e.preventDefault();
				$("#sidebar-wrapper").toggleClass("active");
		});

		// Scrolls to the selected menu item on the page
		$(function() {
				$('a[href*=#]:not([href=#])').click(function() {
						if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

								var target = $(this.hash);
								target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
								if (target.length) {
										$('html,body').animate({
												scrollTop: target.offset().top
										}, 1000);
										return false;
								}
						}
				});
		});
		
var Home = React.createClass({
	getInitialState: function(){
		return{}
	},
	render: function(){
		var B = ReactBootstrap,
		Col = B.Col,
		Row = B.Row,
		Tabs = B.Tabs;
		return(
			<div>

				<header id="top" className="header">
					<div className="text-vertical-center">
							<h1>McGame Jam</h1>
							<h3>Think. Create. Play.</h3>
							<br/>
							<a href="#about" className="btn btn-dark btn-lg">Find Out More</a>
					</div>
				</header>

				<section id="about" className="about">
					<div className="container">
						<Row>
							<Col lg={12} style={{textAlign:"center"}}>
								<h2>What is McGame Jam?</h2>
								<p className="lead">McGame jam is a very recent initiative to develop McGill's game developer community. 
								Founded by Gerald Lang in 2015, it is a 48 hour competition in which teams composed of people from different backgrounds come together in order to create a game.</p>								
							</Col>
						</Row>
					</div>
					<div className="container">
						<Row>
							<Col lg={12} style={{textAlign:"center"}}>
								<h2>Where and when?</h2>
								<p className="lead">McGame jam will be happening on the weekend of March 20th 2015 at École de Technologie Supérieure (ÉTS)</p>								
							</Col>
						</Row>
					</div>
				</section>

				<section id="portfolio" className="portfolio">
					<div className="container">
						<Row>
							<Col lg={10} lgOffset={1} style={{textAlign: "center"}}>
								<h2>Our Sponsors</h2>
								<p className="lead">Stay tuned for updates</p>
								<hr className="small"/>
								<Row>
									<Col sm={12} md={12} lg={12}>
										<img style={{textAlign:"center"}} src="Pictures/LogicielLibre.jpg"></img>
									</Col>
								</Row>
								<Row>
									<Col sm={6} md={6} lg={6}>
										<div className="proftfolio-item">
											<img style={{textAlign:"center", backgroundColor:"black"}} src="Pictures/Conjure.png" height="85%" width="85%"></img>
										</div>
									</Col>
									<Col sm={6} md={6} lg={6}>
										<div className="proftfolio-item">
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</section>						
				<aside className="call-to-action bg-primary">
				<div id="contact" className="container">
					<Row>
							<Col lg={12} style={{textAlign:"center"}}>
									<h3>Interested in participating? Want to sponsor us?</h3>
									<a href="#" className="btn btn-lg btn-light">Sign Up!</a>
									<a href="../Sponsorship/SponsorshipPackage.pdf" className="btn btn-lg btn-dark">Sponsor Us!</a>
							</Col>						
						</Row>
					</div>
				</aside>

				<footer>
				<div className="container">
					<Row>
						<Col lg={10} lgOffset={1} style={{textAlign: "center"}}>
							<h4><strong>McGame Jam</strong></h4>
                <ul className="list-unstyled">
									<li>
										<i className="fa fa-envelope-o fa-fw"></i>  <a href="mailto:name@example.com">terrenceko@terrenceko.com</a>
									</li>
								</ul>
								<br/>
								<ul className="list-inline">
									<li>
											<a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
									</li>
									<li>
											<a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
									</li>
									<li>
											<a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
									</li>
								</ul>
								<hr className="small"/>
								<p className="text-muted">Copyright &copy; McGame Jam 2016<br></br>Logo courtesy of &copy; Stella Designs 2016</p>
							</Col>
						</Row>
					</div>
				</footer>

			</div>
			)
	}
});
ReactDOM.render(<Home/>, document.getElementById('content'));
