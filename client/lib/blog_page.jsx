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
        <h1>{this.data.blog.name}</h1>
      </div>
    )
  }
});