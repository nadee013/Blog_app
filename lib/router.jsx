FlowRouter.route('/', {
  action() {
    ReactLayout.render(Home, {content: <BlogsList />});
  }
});

FlowRouter.route('/blogs/:_id', {
  name: 'blogPage',
  action: function(params) {
    ReactLayout.render(Home, {content: <BlogPage {...params} />})
  }
});