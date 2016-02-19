var Nav = React.createClass({displayName: "Nav",
  
  getInitialState: function() {
      return {  sections:
                [
                  { link: "101", text: "REFUGEE 101"},
                  { link: "host", text: "HOST AN EVENT"},
                  { link: "follow", text: "FOLLOW UP"},
                  { link: "contact", text: "CONTACT US"}
                ]
              };
  },
  
  render: function() {   
    var els = this.state.sections.map(function(section) {
      var element = React.createElement(NavElement, {section: section});
      return element;
    });
  return (
      React.createElement(Navbar, {inverse: true}, 
        React.createElement(Navbar.Header, null, 
          React.createElement(Navbar.Brand, null, 
            React.createElement("a", {href: "#"}, "USA for UNHCR")
          ), 
          React.createElement(Navbar.Toggle, null)
        ), 
        React.createElement(Navbar.Collapse, null, 
          React.createElement(Nav, null, 
            els
          )
        )
      )
    )
  }
});

var NavElement = React.createClass({displayName: "NavElement",
  render: function() {
    return  React.createElement(NavItem, {href: this.props.section.link}, this.props.section.text)
  }
});


var Headline = React.createClass({displayName: "Headline",
  render: function() {
    return React.createElement("div", {className: "headline-wrap"}, 
      React.createElement("h1", {className: "headline"}, "ENGAGE YOUR COMMUNITY AROUND THE REFUGEE CRISIS"), 
      React.createElement("h3", {className: "sub-headline"}, "EDUCATE. ENGAGE. TRANSFORM.")
    )
  }  
});

var IntroSection = React.createClass({displayName: "IntroSection",
  render: function() {
    return
    React.createElement("div", {className: "intro-section"}, 
      React.createElement("p", {className: "intro-para"})
    )
  }
});



ReactDOM.render( React.createElement(Nav, null), document.getElementById('navbar'))

ReactDOM.render( 
  React.createElement(Headline, null),
  document.getElementById('headline')
  )