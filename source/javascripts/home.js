
var ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;
var Nav = React.createClass({displayName: "Nav",
  
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
      var element = React.createElement(NavElement, {key: section.link, section: section});
      return element;
    });
    var iconClass = "nav-icon " + this.state.open;
    var menuClass = "menu " + this.state.open;
  return (
      
      React.createElement("div", {className: "Navbar"}, 
      React.createElement("div", {className: "icon-wrapper"}, 
        "MENU", 
        React.createElement("div", {className: iconClass, onClick: this.handleClick}, 
          React.createElement("span", {className: this.state.open}), 
          React.createElement("span", {className: this.state.open}), 
          React.createElement("span", {className: this.state.open}), 
          React.createElement("span", {className: this.state.open})
        )
      ), 
        React.createElement("div", {className: menuClass}, 
            els
        ), 
        React.createElement("img", {src: "/images/U4Ulogo.png"})
      )
    );
  }
});

var NavElement = React.createClass({displayName: "NavElement",
  render: function() {
    return  React.createElement("a", {href: this.props.section.link}, this.props.section.text);
  }
});


var Headline = React.createClass({displayName: "Headline",
  render: function() {
    return React.createElement("div", {className: "headline-wrap"}, 
      React.createElement("h1", {className: "headline"}, "ENGAGE YOUR COMMUNITY AROUND THE REFUGEE CRISIS"), 
      React.createElement("h3", {className: "sub-headline"}, "EDUCATE. ENGAGE. TRANSFORM.")
    );
  }  
});

var IntroSection = React.createClass({displayName: "IntroSection",
  render: function() {
    return (
    React.createElement("div", {className: "intro-section"}, 
      React.createElement("p", {className: "intro-para"})
    )
    );
  }
});

var Signup = React.createClass ({displayName: "Signup",
  render: function() {
    return (
      React.createElement("div", {className: "signup"}, 
      "BECOME A PARTNER:", 
        React.createElement("form", {className: "signupForm"}, 
          React.createElement("fieldset", null, 
            React.createElement("label", null, "Name:"), 
            React.createElement("input", {type: "text"})
          ), 
          React.createElement("fieldset", null, 
            React.createElement("label", null, "Email:"), 
            React.createElement("input", {type: "email"})
          ), 
          React.createElement("fieldset", null, 
            React.createElement("label", null, "Notes:"), 
            React.createElement("input", {type: "textarea"})
          )
        )
      )
      )
  }
})

ReactDOM.render( React.createElement(Nav, null), document.getElementById('nav-bar'));
ReactDOM.render( React.createElement(Headline, null), document.getElementById('hero'));

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement(Signup, null), 
    React.createElement(ToolkitSelect, null)
  ),
  document.getElementById('content')
  );