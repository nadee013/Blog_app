Meteor.methods({
  insertBlog: function(text) {
    console.log("Adding blog ", text);
    return Blogs.insert({'name': text});
  },

  deleteBlog: function(id) {
    console.log("Removing blog", id);
    return Blogs.remove({_id: id});
  }
});