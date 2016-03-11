ArticleL = React.createClass({
  
  getInitialState: function() {
    var myApp = new Framework7();
    var $$ = Dom7;

    return {
      myApp: myApp,
      $$: $$
    };
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  propTypes: {
    article: React.PropTypes.object.isRequired
  },

  ClickEdit() {
    this.context.router.push('/article/edit/'+this.props.article._id);
  },

  ClickDelete() {
    var thisProps = this.props;

    this.state.myApp.confirm('Are you sure?', 'Delete '+thisProps.article.title, function () {
        Meteor.call("removeArticle", thisProps.article._id);
    });
  },

  componentDidMount: function() {

    var State = this.state;
    var ThisObj = this;

    State.$$('#item-link-'+ThisObj.props.article._id).on('click', function () {
      var buttons = [
        {
          text: 'Edit',
          onClick: function () {
            ThisObj.ClickEdit();
          }
        },
        {
          text: 'Delete',
          onClick: function () {
            ThisObj.ClickDelete();
          }
        },
        {
          text: 'Cancel',
          color: 'red'
        },
      ];

      State.myApp.actions(buttons);
    });
  },
 
  render() {
    const tagId = 'item-link-'+this.props.article._id;

    return (
      <li>
        <a href="#" id={tagId} className="item-link item-content">
          <div className="item-inner">
            <div className="item-title">{this.props.article.title}</div>
            <div className="item-after">{this.props.article.by}</div>
          </div>
        </a>
      </li>
    );
  }
});