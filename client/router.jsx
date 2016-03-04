const {Router, Route, IndexRoute, browserHistory} = ReactRouter;

Meteor.startup(function() {
  const routes = (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="/main-menu" component={MainMenu} />
        <Route path="/signup" component={SignUp} />
        <IndexRoute component={AppLoading} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  );

  ReactDOM.render(routes, document.getElementById("app-container"));
});
