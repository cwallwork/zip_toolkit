
var ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;
var Nav = React.createClass({
  
  getInitialState: function() {
      return {  sections:
                [
                  { link: "101", text: "REFUGEE 101"},
                  { link: "host", text: "HOST AN EVENT"},
                  { link: "follow", text: "FOLLOW UP"},
                  { link: "contact", text: "CONTACT US"}
                ],
                open: "closed"
              };
  },

  handleClick: function() {
    this.setState({open: this.isOpen()});
  },

  isOpen: function(){
    return this.state.open === "open" ? "closed" : "open";
  },
  
  render: function() {   
    var els = this.state.sections.map(function(section) {
      var element = <NavElement key={section.link} section={section}/>;
      return element;
    });
    var iconClass = "nav-icon " + this.state.open;
    var menuClass = "menu " + this.state.open;
  return (
      
      <div className="Navbar">
      <div className="icon-wrapper">
        MENU
        <div className={iconClass} onClick={this.handleClick}>
          <span className={this.state.open}></span>
          <span className={this.state.open}></span>
          <span className={this.state.open}></span>
          <span className={this.state.open}></span>
        </div>
      </div>
        <div className={menuClass}>
            {els}
        </div>
        <img src="/images/U4Ulogo.png"/>
      </div>
    );
  }
});

var NavElement = React.createClass({
  render: function() {
    return  <a href={this.props.section.link}>{this.props.section.text}</a>;
  }
});


var Headline = React.createClass({
  render: function() {
    return <div className="headline-wrap">
      <h1 className="headline">ENGAGE YOUR COMMUNITY AROUND THE REFUGEE CRISIS</h1>
      <h3 className="sub-headline">EDUCATE. ENGAGE. TRANSFORM.</h3>
    </div>;
  }  
});

var IntroSection = React.createClass({
  render: function() {
    return (
    <div className="intro-section">
      <p className="intro-para"></p>
    </div>
    );
  }
});

var Signup = React.createClass ({
  render: function() {
    return (
      <div className="signup">
      BECOME A PARTNER:
        <form className="signupForm">
          <fieldset>
            <label>Name:</label>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <label>Email:</label>
            <input type="email"/>
          </fieldset>
          <fieldset>
            <label>Notes:</label>
            <input type="textarea"/>
          </fieldset>
        </form>
      </div>
      )
  }
})

ReactDOM.render( <Nav/>, document.getElementById('nav-bar'));
ReactDOM.render( <Headline/>, document.getElementById('hero'));

ReactDOM.render(
  <div>
    <Signup/>
    <ToolkitSelect/>
  </div>,
  document.getElementById('content')
  );