EditArticle = React.createClass({

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

        Meteor.call("editArticle", thisReact.props.params.id, obj, function(err){
          if(err){
            thisReact.state.myApp.alert(err, 'Alert !');
          }else{
            thisReact.state.myApp.alert('Save complete.', 'Alert !');
          }
        });
      }
    });
  },

  getMeteorData() {
    var handle = Meteor.subscribe('article');
    var article = Articles.findOne({ _id: this.props.params.id });

    return {
      articleLoading: ! handle.ready(), // Use handle to show loading state
      article: article
    };
  },
 
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.articleLoading) {
      return <AppLoading />;
    }

    if (!this.data.article || !this.data.article._id) {
      return <NotFoundData />;
    }

    return (
      <form id="form-article">
        <div className="content-block-title">Edit article</div>
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
                    defaultValue={this.data.article.title}
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
                    <textarea ref="content" name="content" placeholder="Content" defaultValue={this.data.article.content}>
                    </textarea>
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