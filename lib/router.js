FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Home);
  }
});

FlowRouter.route('/blogs/:_id', {
  name: 'blogPage',
  action: function(params) {
    Session.set("id", params._id);
    ReactLayout.render(BlogPage)
  }
});