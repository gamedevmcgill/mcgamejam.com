var ENGLISH;
var FRENCH;
var NEWS=[];
$(document).ready(function() {
	$.ajaxSetup({ cache: false });
});
$.ajaxSetup({
			async: false,
			cache: false
	});
$.getJSON( "../lib/languages/english.json"+'?', { cache: false},function() {})
	.done(function( data ) {
		ENGLISH = data;
		})
	.fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    })
	.always(function() {
	});
$.getJSON( "../lib/languages/french.json"+'?', { cache: false},function() {})
	.done(function( data ) {
		FRENCH = data;
		})
	.fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    })
	.always(function() {
	});
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
		return{
			language: ENGLISH,
			selection: 'english',
		}
	},
	handleChange: function(stateName) {
		return function (event) {
			var state={};
			state[stateName]=event.target ? event.target.value : event;
			this.setState(state)
			}.bind(this);
	},
	handleLanguage: function(){
		switch(this.state.selection){
			case 'english':
				this.setState({selection:'french',language:FRENCH})
				break;
			case 'french':
				this.setState({selection:'english', language:ENGLISH})
				break;
			default:
				this.setState({selection:'english', language:ENGLISH})
		}
	},
	render: function(){
		var B = ReactBootstrap,
		Col = B.Col,
		Row = B.Row,
		Button = B.Button,
		Tabs = B.Tabs;
		var text=this.state.language;
		return(
			<div>
				<header id="top" className="header">
					<div className="text-vertical-center">
							<h1>McGame Jam</h1>
							<h3>{text.motto}</h3>
							<br/>
							<a href="#about" className="btn btn-dark btn-lg">{text.more}</a>
							<br/><br/>
							<Button className="btn btn-dark btn-lg" type="submit" onClick={this.handleLanguage}>{text.language}</Button>
					</div>
				</header>

			<section id="about" className="about">
				<div className="container">
					<Row>
						<Col lg={12} style={{textAlign:"center"}}>
							<h2>{text.what}</h2>
							<p className="lead">{text.description}</p>
						</Col>
					</Row>
				</div>
				<div className="container">
					<Row>
						<Col lg={12} style={{textAlign:"center"}}>
							<h2>{text.who}</h2>
							<p className="lead">{text.recommendations}</p>
						</Col>
					</Row>
				</div>
				<div className="container">
					<Row>
						<Col lg={12} style={{textAlign:"center"}}>
							<h2>{text.preparation}</h2>
							<p className="lead">{text.software}</p>
							<p>Python+Pygame</p>
							<p>Javascript</p>
							<p>C#</p>
							<p>C++</p>
							<p>Unity</p>
							<p>Unreal Engine</p>
							<p>Mixamo</p>
						</Col>
					</Row>
				</div>
				<div className="container">
					<Row>
						<Col lg={12} style={{textAlign:"center"}}>
							<h2>{text.whereWhen}</h2>
							<p className="lead">{text.actualWhereWhen}</p>
						</Col>
					</Row>
				</div>
			</section>
			<section id="portfolio" className="portfolio">
				<div className="container">
					<Row>
						<Col lg={10} lgOffset={1} style={{textAlign: "center"}}>
							<h2>{text.sponsors}</h2>
							<p className="lead">{text.updates}</p>
							<hr className="small"/>
							<Row>
								<Col sm={12} md={12} lg={12}>
									<img style={{textAlign:"center", marginBottom: "15px",marginTop: "15px",}} height="85%" width="85%" src="Pictures/LogicielLibre.jpg"></img>
								</Col>
							</Row>
							<Row>
								<Col sm={12} md={12} lg={12}>
									<img style={{textAlign:"center", marginBottom: "15px",marginTop: "15px",}} height="85%" width="85%" src="Pictures/sus.png"></img>
								</Col>
							</Row>
							<Row>
								<Col sm={6} md={6} lg={6}>
									<div className="porftfolio-item">
										<img style={{textAlign:"center",marginBottom: "15px",marginTop: "15px", backgroundColor:"black"}} src="Pictures/Conjure.png" height="85%" width="85%"></img>
									</div>
								</Col>
								<Col sm={6} md={6} lg={6}>
									<div className="proftfolio-item">
										<img style={{textAlign:"center",marginBottom: "15px",marginTop: "15px"}} src="Pictures/wrecko.png" height="85%" width="85%"></img>
									</div>
								</Col>
							</Row>
							<Row>
							<Col sm={6} md={6} lg={6}>
								<div className="proftfolio-item">
									<img style={{textAlign:"center",marginBottom: "15px",marginTop: "15px"}} src="Pictures/constellationGames.png" height="70%" width="70%"></img>
								</div>
							</Col>
							<Col style={{verticalAlign:"middle", marginTop:"10%"}} sm={6} md={6} lg={6}>
								<p style={{fontSize:"500%", fontFamily:'Fjalla One', color:"#337ab7"}}>McGill CSUS</p>
							</Col>
							</Row>
							<Row>
							<Col sm={6} md={6} lg={6}>
								<div className="proftfolio-item">
									<img style={{textAlign:"center",marginBottom: "15px",marginTop: "15px"}} src="Pictures/lanETS.png" height="70%" width="70%"></img>
								</div>
							</Col>
							<Col sm={6} md={6} lg={6}>

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
								<h3>{text.interested}</h3>
								<a href="https://www.eventbrite.ca/e/mcgamejam-2016-tickets-21470867944" className="btn btn-lg btn-light">{text.signup}</a>
								<a href="../Sponsorship/SponsorshipPackage.pdf" className="btn btn-lg btn-dark">{text.sponsorUs}</a>
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
									<i className="fa fa-envelope-o fa-fw"></i>  <a href="mailto:admin@mcgamejam.com">admin@mcgamejam.com</a>
								</li>
							</ul>
							<br/>
							<ul className="list-inline">
								<li>
										<a href="https://www.facebook.com/mcgamejam/"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
								</li>
								<li>
										<a href="https://twitter.com/McGameJam?cn=Zm9sbG93ZXI%3D&refsrc=email"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
								</li>
								<li>
										<a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
								</li>
							</ul>
							<hr className="small"/>
							<p className="text-muted">Copyright &copy; McGame Jam 2016<br></br>{text.logo}</p>
						</Col>
					</Row>
				</div>
			</footer>
		</div>
		)
	}
});
ReactDOM.render(<Home/>, document.getElementById('content'));
