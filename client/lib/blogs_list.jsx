BlogsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {
      'blogs': []
    };
    var handle = subs.subscribe('blogs');
    if(handle.ready()) {
      data.blogs = Blogs.find().fetch()
    }
    return data;
  },

  goToBlog(item) {
    FlowRouter.go('blogPage', {"_id": item._id});
  },

  handleSubmit(event) {
    event.preventDefault();
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("insertBlog", text, function(err, id) {
      if(err) {
        return alert(err.reason);
      }
    });
    React.findDOMNode(this.refs.textInput).value = "";
  },

  deleteBlog(item) {
    Meteor.call("deleteBlog", item._id, function(err) {
      if(err) {
        return alert(err.reason);
      }
    });
  },

  getForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
            type='text'
            ref='textInput'
            placeholder='Type name of the blog to add'
            className="form-control"/>
        </div>
      </form>
    )
  },

  render() {
    var self = this;
    return (
      <div className="col-md-12">
        <div className="panel-heading">
          {this.getForm()}
        </div>
        <div className="panel-body">
          <ul className="list-group"> {
            this.data.blogs.map(function(item) {
              return (
                <li className="list-group-item">
                  <a href="" onClick={self.goToBlog.bind(self, item)}>{item.name}</a>
                  <span className="text-danger pull-right" onClick={self.deleteBlog.bind(self, item)}>Delete</span>
                </li>
              )
            })
          } </ul>
        </div>
      </div>
    );
  }
});