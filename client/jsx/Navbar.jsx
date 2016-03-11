Navbar = React.createClass({
	propTypes: {
    show: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  renderRight() {
  	var rShow = this.props.show.right.show;

  	switch(rShow){
  		case 'Button':
  			return <span>{ this.props.show.right.text }</span>
  		break;
  		default:
  			return <a href="#" className="link" onClick={ this.menuPage }>
	                <i className="icon icon-bars"></i>
	                <span>{ this.props.show.right.text }</span>
	            </a>;
  		break;
  	}
  },

  backPage() {
  	this.context.router.goBack();
  },

  menuPage() {
  	this.context.router.push('/main-menu');
  },

  render() {
    return (
      <div className="navbar">
		    <div className="navbar-inner">
	        <div className="left">
            <a href="#" className="link" onClick={ this.backPage }>
              <i className="icon icon-back"></i>
              <span>Back</span>
            </a>
	        </div>
	        <div className="center">
            { this.props.show.title }
          </div>
	        <div className="right">
	        	{ this.renderRight() }
	        </div>
			  </div>
			</div>
    );
  }
});