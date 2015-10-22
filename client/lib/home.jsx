subs = new SubsManager();
var title = "Meteor react testing blog";
DocHead.setTitle(title);

Home = React.createClass({
  render() {
    return (
      <div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div>
            <header className="col-md-12 bg-primary">
              <h1>Welcome to Meteor React</h1>
            </header>
            <main className="col-md-12 panel panel-default">{this.props.content}</main>
            <footer className="col-md-12 bg-info">Happy learning...!</footer>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    )
  }
});