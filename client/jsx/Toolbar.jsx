Toolbar = React.createClass({
	propTypes: {
    show: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="toolbar tabbar">
		    <div className="toolbar-inner">
		        <a href="#tab1" className="tab-link active">
		            <i className="glyphicon glyphicon-info-sign"></i>
		        </a>
		        <a href="#tab2" className="tab-link">
		            <i className="glyphicon glyphicon-envelope"></i>
		        </a>
		        <a href="#tab3" className="tab-link">
		            <i className="glyphicon glyphicon-cloud"></i>
		        </a>
		        <a href="#tab4" className="tab-link">
		            <i className="glyphicon glyphicon-camera"></i>
		        </a>
		    </div>
			</div>
    );
  }
});
