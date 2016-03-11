NewArticle = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getInitialState: function() {
    var myApp = new Framework7({
      materialRipple: true
    });

    var $$ = Dom7;

    return {
      myApp: myApp,
      $$: $$
    };
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount: function() {
    if (! Meteor.userId()) {
      this.context.router.push('/');
    }

    var thisReact = this;

    $('form#form-article').validate({
      rules: {
        title: {
          required: true,
        },
        content: {
          required: true
        }
      },
      messages: {
        title: {
          required: "Please enter title."
        },
        content: {
          required: "Please enter content."
        }
      },
      submitHandler: function() {
        var obj = {
          title: $('input[name="title"]').val().trim(),
          content: $('textarea[name="content"]').val()
        };

        Meteor.call("addArticle", obj, function(err){
          if(err){
            thisReact.state.myApp.alert(err, 'Alert !');
          }else{
            thisReact.context.router.push('/');
          }
        });

        $('input[name="title"]').val('');
        $('textarea[name="content"]').val('');
      }
    });
  },

  getMeteorData() {
    return {
      
    };
  },

  render() {
    return (
      <form id="form-article">
        <div className="content-block-title">New article</div>
        <div className="list-block">
          <ul>
            <li>
              <div className="item-content">
                <div className="item-media"><i className="icon icon-form-email"></i></div>
                <div className="item-inner">
                  <div className="item-input">
                    <input
                    type="text"
                    ref="title"
                    name="title"
                    autoComplete="off"
                    placeholder="Title" />
                  </div>
                </div>
              </div>
            </li>
            <li className="align-top">
              <div className="item-content">
                <div className="item-media"><i className="icon icon-form-comment"></i></div>
                <div className="item-inner">
                  <div className="item-input">
                    <textarea ref="content" name="content" placeholder="Content"></textarea>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-block text-center">
          <button type="submit" className="button button-fill color-teal hidden">Save</button>
        </div>
      </form>
    );
  }
});
