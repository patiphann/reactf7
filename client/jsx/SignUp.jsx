SignUp = React.createClass({

	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

	contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount: function() {
  	var thisReact = this;

    $('form#form-signup').validate({
		  rules: {
		    email: {
		      required: true,
		      email: true
		    },
		    password: {
		      required: true
		    },
		    name: {
		    	required: true,
		    	lettersonly: true
		    },
		    phone: {
		    	required: true
		    },
		    dob: {
		    	required: true,
		    	dateISO: true
		    }
		  },
		  messages: {
		    email: {
		      required: "Please enter your email address.",
		      email: "Please enter a valid email address."
		    },
		    password: {
		      required: "Please enter your password."
		    },
		    name: {
		    	required: "Please enter your name.",
		    	lettersonly: "Please enter your name with english only."
		    },
		    phone: {
		    	required: "Please enter your phone."
		    },
		    dob: {
		    	required: "Please enter your birth day.",
		    	dateISO: "Please enter a valid birth day."
		    }
		  },
		  submitHandler: function() {
		    var user = {
		      email: $('input[name="email"]').val().trim(),
		      password: $('input[name="password"]').val(),
		      profile: {
	          name: $('input[name="name"]').val().trim(),
	          tel: $('input[name="phone"]').val().trim(),
	          dob: $('input[name="dob"]').val().trim()
	        }
		    };

		    Accounts.createUser(user, function (error) {
	        if(error){
	          console.log(error);
	        }else{
	          thisReact.context.router.push('/');
	        }
	      });
		  }
		});
  },

  getInitialState: function() {
  	var defaultDate = new Date();
  	defaultDate = defaultDate.yyyymmdd('-');

    return {
    	dob: defaultDate
    };
  },

  handleChange: function(e) {
    this.setState({ [e.target.name]: e.target.value });
  },

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      
    };
  },

  render() {
    return (
  		<form id="form-signup">
	      <div className="content-block-title">Sign Up</div>
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
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-name"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="text"
		                ref="name"
		                name="name"
		                pattern="[A-Za-z ]+"
		                title="Please enter your name with english only."
		                placeholder="Your name" />
				          </div>
				        </div>
				      </div>
				    </li>
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-tel"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="text"
		                ref="phone"
		                name="phone"
		                pattern="[0-9]{10}"
		                title="Phone Number?!?!"
		                placeholder="Phone" />
				          </div>
				        </div>
				      </div>
				    </li>
				    <li>
				      <div className="item-content">
				        <div className="item-media"><i className="icon icon-form-calendar"></i></div>
				        <div className="item-inner">
				          <div className="item-input">
				            <input
		                type="date"
		                ref="dob"
		                name="dob"
		                value={this.state.dob}
		                onChange={this.handleChange}
		                placeholder="Birth day" />
				          </div>
				        </div>
				      </div>
				    </li>
				  </ul>
				</div>
				<div className="content-block text-center">
					<button type="submit" className="button button-fill color-teal hidden">Sign Up</button>
				</div>
			</form>
    );
  }
});
