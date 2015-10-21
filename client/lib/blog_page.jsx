BlogPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      blog: Blogs.findOne(Session.get("id"))
    };
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