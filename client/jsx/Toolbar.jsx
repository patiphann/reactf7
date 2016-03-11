Toolbar = React.createClass({
	propTypes: {
    show: React.PropTypes.object.isRequired
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  backPage() {
  	this.context.router.goBack();
  },

  goHome() {
  	this.context.router.push('/');
  },

  goMenu() {
  	this.context.router.push('/main-menu');
  },

  render() {
    return (
      <div className="toolbar tabbar">
		    <div className="toolbar-inner">
		        <a href="#" className="tab-link" onClick={ this.backPage }>
		            <i className="glyphicon glyphicon-triangle-left"></i>
		        </a>
		        <a href="#" className="tab-link" onClick={ this.goHome }>
		            <i className="glyphicon glyphicon-home"></i>
		        </a>
		        <a href="#" className="tab-link" onClick={ this.goMenu }>
		            <i className="glyphicon glyphicon-th-list"></i>
		        </a>
		    </div>
			</div>
    );
  }
});
