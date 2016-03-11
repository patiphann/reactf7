Meteor.publish("article", function () {
  var res = Articles.find({}, { sort: { updatedAt: -1, createdAt: -1 } });
  return res;
});