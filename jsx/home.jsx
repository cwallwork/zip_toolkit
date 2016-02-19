var Nav = React.createClass({
  
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
      var element = <NavElement section={section}/>;
      return element;
    });
  return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">USA for UNHCR</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {els}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
});

var NavElement = React.createClass({
  render: function() {
    return  <NavItem href={this.props.section.link}>{this.props.section.text}</NavItem>
  }
});


var Headline = React.createClass({
  render: function() {
    return <div className="headline-wrap">
      <h1 className="headline">ENGAGE YOUR COMMUNITY AROUND THE REFUGEE CRISIS</h1>
      <h3 className="sub-headline">EDUCATE. ENGAGE. TRANSFORM.</h3>
    </div>
  }  
});

var IntroSection = React.createClass({
  render: function() {
    return
    <div className="intro-section">
      <p className="intro-para"></p>
    </div>
  }
});



ReactDOM.render( <Nav/>, document.getElementById('navbar'))

ReactDOM.render( 
  <Headline/>,
  document.getElementById('headline')
  )