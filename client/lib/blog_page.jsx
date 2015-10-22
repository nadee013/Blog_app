BlogPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var id = this.props._id;
    var data = {
      'blog': []
    };
    var handler = subs.subscribe("blog", id);
    if(handler.ready()) {
      data.blog = Blogs.findOne(id);
    }
    return data;
  },

  render() {
    return (
      <div>
        <a href="/">Back</a>
        <h1>{this.data.blog.name}</h1>
      </div>
    )
  }
});