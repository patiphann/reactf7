App = React.createClass({
	mixins: [ReactMeteorData],

	contextTypes: {
    router: React.PropTypes.object
  },

	getMeteorData() {
    const subsReady = true;

    // Get the current routes from React Router
    const routes = this.props.routes;
    const objShow = { title: 'Home', right: { show: 'default', text: 'Menu', icon: 'icon icon-bars' } };

    switch(routes[1].path){
    	case '/main-menu':
    		objShow.title = 'Main menu';
    	break;
    	case '/signup':
    		objShow.title = 'Sign Up';
    	break;
    }

    return {
      subsReady: subsReady,
      show: objShow
    };
  },

  renderNavbar() {
    return <Navbar
      show={this.data.show}
      history={this.props.history} />;
  },

  renderToolbar() {
  	return <Toolbar
      show={this.data.show} />;
  },

  render() {
    let appBodyContainerClass = "";

    return (
    	<div className="view view-main">
    		<div className="pages">
    			<div className="page navbar-fixed">

						{ this.renderNavbar() }
		      
		      	<div className="page-content">
			        <div className="content-block">
			          { this.data.subsReady ?
			            this.props.children :
			            <AppLoading /> }
			        </div>
			      </div>

			      { this.renderToolbar() }

		      </div>
	      </div>
	    </div>
    );
  }
});