MainMenu = React.createClass({

	contextTypes: {
    router: React.PropTypes.object
  },

  signIn() {
  	this.context.router.push('/signup');
  },

  render() {
    return (
      <div className="list-block">
      	<div className="content-block-title">Main menu</div>
			  <ul>
			    <li>
			      <a href="#" className="item-link item-content" onClick={ this.signIn }>
			        <div className="item-inner">
			          <div className="item-title">Sign Up</div>
			          <div className="item-after"></div>
			        </div>
			      </a>
			    </li>
			    <li>
			      <a href="#" className="item-link item-content">
			        <div className="item-inner">
			          <div className="item-title">Forget Password</div>
			          <div className="item-after"></div>
			        </div>
			      </a>
			    </li>
			  </ul>
			</div>
    );
  }
});