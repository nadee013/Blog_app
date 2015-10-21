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

  handleSubmit(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    console.log(text);

    Blogs.insert({'name': text});
    React.findDOMNode(this.refs.textInput).value = "";
  },

  render() {
    var self = this;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text'
              ref='textInput'
              placeholder='Type name of the blog to add'/>
          </form>
        </div>
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
      </div>
    );
  }
});