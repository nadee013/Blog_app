let blogs = [
  {'name': 'Discover Meteor', '_id': 1},
  {'name': 'Bulletproof Meteor', '_id': 2}
]


BlogsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      blogs: Blogs.find().fetch()
    };
  },

  goToBlog(item) {
    FlowRouter.go('blogPage', {"_id": item._id});
  },

  render() {
    var self = this;
    return (
      <div>
        <ul> {
          this.data.blogs.map(function(item) {
            return (
              <li>
                <a href="" onClick={self.goToBlog.bind(self, item)}>{item.name}</a>
              </li>
            )
          })
        } </ul>
      </div>
    );
  }
});