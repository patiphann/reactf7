Meteor.methods({
  addArticle(obj) {
    // Make sure the user is logged in
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Articles.insert({
      title: obj.title,
      content: obj.content,
      createdAt: new Date(),
      created_by: Meteor.userId(),
      created_name: Meteor.user().profile.name
    });
  },

  editArticle(id, obj) {
    // Make sure the user is logged in
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Articles.update({
      _id: id
    },{
      $set: {
        title: obj.title,
        content: obj.content,
        updatedAt: new Date(),
        updated_by: Meteor.userId(),
        updated_name: Meteor.user().profile.name
      }
    });
  },
 
  removeArticle(taskId) {
  	// Make sure the user is logged in
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Articles.remove(taskId);
  }
});