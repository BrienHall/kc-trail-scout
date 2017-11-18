class Navbar extends Component {
  render() {
    return (
		<div className="container">
			<nav className="navbar">
				<a className="navbar-brand" href="index.html">KC TRAIL SCOUT (alpha) <i className="fa fa-bicycle" aria-hidden="true"></i></a>
				<nav className="nav navbar-nav navbar-right" className="text-muted"> 
				<a id="catalog-link" href="https://brienhall.github.io/catalog/" name="catalog"><span className="text-muted">00004</span></a>
				</nav>
			</nav>
		</div>
	);
  }
}

export default Navbar;