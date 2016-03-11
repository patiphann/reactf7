SignIn = React.createClass({

	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

	contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount: function() {
  	var thisReact = this;

    $('form#form-signin').validate({
		  rules: {
		    email: {
		      required: true,
		      email: true
		    },
		    password: {
		      required: true
		    }
		  },
		  messages: {
		    email: {
		      required: "Please enter your email address.",
		      email: "Please enter a valid email address."
		    },
		    password: {
		      required: "Please enter your password."
		    }
		  },
		  submitHandler: function() {
		    var user = {
		      email: $('input[name="email"]').val().trim(),
		      password: $('input[name="password"]').val(),
		    };

		    Meteor.loginWithPassword(user.email, user.password, function(error){
		    	if(error){
	          console.log(error);
	        }else{
	          thisReact.context.router.push('/');
	        }
		    });
		  }
		});
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      
    };
  },

  render() {
    return (
  		<form id="form-signin">
	      <div className="content-block-title">Sign In</div>
				<div className="list-block">
				  <ul>
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-email"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="text"
		                ref="email"
		                name="email"
		                required
		                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
		                title="Please enter a valid email address."
		                placeholder="E-mail" />
				          </div>
				        </div>
				      </div>
				    </li>
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-password"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="password"
		                ref="password"
		                name="password"
		                placeholder="Password" />
				          </div>
				        </div>
				      </div>
				    </li>
				  </ul>
				</div>
				<div className="content-block text-center">
					<button type="submit" className="button button-fill color-teal hidden">Sign In</button>
				</div>
			</form>
    );
  }
});
