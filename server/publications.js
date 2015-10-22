Meteor.publish('blogs', function() {
  return Blogs.find({}, {sort: {'name': 1}});
});

Meteor.publish("blog", function(id) {
  return Blogs.find({_id: id});
});