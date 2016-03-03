SignUp = React.createClass({

	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

	contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
  	event.preventDefault();

  	console.log('submit');
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      
    };
  },

  render() {
    return (
  		<form onSubmit={this.handleSubmit} >
	      <div className="content-block-title">Sign Up</div>
				<div className="list-block">
				  <ul>
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-name"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="text"
		                ref="name"
		                placeholder="Your name" />
				          </div>
				        </div>
				      </div>
				    </li>
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-email"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="text"
		                ref="email"
		                placeholder="E-mail" />
				          </div>
				        </div>
				      </div>
				    </li>
				  </ul>
				</div>
				<div className="content-block text-center">
					<button type="submit" className="button button-fill color-teal">Sign Up</button>
				</div>
			</form>
    );
  }
});