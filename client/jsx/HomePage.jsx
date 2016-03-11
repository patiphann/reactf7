HomePage = React.createClass({
	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getInitialState: function() {
  	return {
    };
  },

	contextTypes: {
    router: React.PropTypes.object
  },

  getMeteorData() {
  	var handle = Meteor.subscribe('article');

    return {
    	articlesLoading: ! handle.ready(), // Use handle to show loading state
      articles: Articles.find({}).fetch()
    };
  },

  renderArticle() {
    return this.data.articles.map((doc) => {
      return <ArticleL
        key={doc._id}
        article={doc}/>;
    });
  },

  formInsArticle() {
  	this.context.router.push('/article/new');
  },

  render() {
  	// Show a loading indicator if data is not ready
    if (this.data.articlesLoading) {
      return <AppLoading />;
    }

    if (this.data.articles.length === 0) {
    	return <NotFoundData />;
    }

    return (
    	<div>
			  <div className="list-block">
			  	<div className="content-block-title" onClick={this.formInsArticle}><span className="glyphicon glyphicon-plus text-success"></span> Articles</div>
				  <ul>
				    {this.renderArticle()}
				  </ul>
				</div>
		  </div>
    );
  }
});