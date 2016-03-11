MainMenu = React.createClass({

	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

	contextTypes: {
    router: React.PropTypes.object
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  signUp() {
  	this.context.router.push('/signup');
  },

  signIn() {
  	this.context.router.push('/signin');
  },

  signOut() {
  	Meteor.logout();
  },

  render() {
  	const currentUserId = this.data.currentUser && this.data.currentUser._id;
  	let resObj;

  	if(currentUserId){
  		resObj = (
	      <div className="list-block">
	      	<div className="content-block-title">Main menu</div>
				  <ul>
				    <li>
				      <div className="item-content">
				        <div className="item-inner">
				          <div className="item-title">{ this.data.currentUser.profile.name }</div>
				          <div className="item-after"></div>
				        </div>
				      </div>
				    </li>
				    <li>
				      <a href="#" className="item-link item-content" onClick={ this.signOut }>
				        <div className="item-inner">
				          <div className="item-title">Sign Out</div>
				          <div className="item-after"></div>
				        </div>
				      </a>
				    </li>
				  </ul>
				</div>
	    );
  	}else{
  		resObj = (
	      <div className="list-block">
	      	<div className="content-block-title">Main menu</div>
				  <ul>
				  	<li>
				      <a href="#" className="item-link item-content" onClick={ this.signIn }>
				        <div className="item-inner">
				          <div className="item-title">Sign In</div>
				          <div className="item-after"></div>
				        </div>
				      </a>
				    </li>
				    <li>
				      <a href="#" className="item-link item-content" onClick={ this.signUp }>
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

  	return resObj;
  }
});