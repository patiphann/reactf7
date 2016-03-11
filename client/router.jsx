const {Router, Route, IndexRoute, browserHistory} = ReactRouter;

if (Meteor.isClient) {

  // Initialize app
  var myApp = new Framework7();

  // If we need to use custom DOM library, let's save it to $$ variable:
  var $$ = Dom7;

  Meteor.startup(function() {
    const routes = (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={HomePage} />
          <Route path="/main-menu" component={MainMenu} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/article/new" component={NewArticle} />
          <Route path="/article/edit/:id" component={EditArticle} />
          <IndexRoute component={AppLoading} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    );

    ReactDOM.render(routes, document.getElementById("app-container"));
  });
}