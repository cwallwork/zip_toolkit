var ToolkitSelect = React.createClass({displayName: "ToolkitSelect",
  getInitialState: function() {
      return {
        selections: {
          "ice breaker": {text: "ice breaker", path: "Ice_Breaker.pdf"},
          "fact sheet": {text: "fact sheet", path: "Fact_sheet.pdf"},
          "presentation": {text: "presentation", path: "Presentation.pdf"},
          "signup cards": {text: "signup cards", path: "Signup_Cards.pdf"},
          "talking points": {text: "talking points", path: "Social_Gathering_Talking_Points.pdf"},
          "toolkit": {text: "toolkit", path: "Social_Gathering_Toolkit.pdf"}
        },
        currentDownload: []    
      };
  },

  addSelection: function(selection){
    this.setState(function(previousState){currentDownload: previousState.currentDownload.push(selection)});
    this.setState(function(previousState){
      delete previousState.selections[selection.text];
      {selections: previousState.selections};
    });
  },

  removeSelection: function(selection){
    for(var i=0; i< this.state.currentDownload.length; i++){
      if(this.state.currentDownload[i] == selection){
        this.state.currentDownload.splice(i,i);
      }
    }
  },

  render: function(){
    return(
      React.createElement("div", {className: "zip-select"}, 
        React.createElement(DownloadButtons, {current: this.state.currentDownload}), 
        React.createElement(SelectObjects, {addSelection: this.addSelection, selections: this.state.selections, current: this.state.currentDownload})
      )
      )
  }
});


var SelectObjects = React.createClass({displayName: "SelectObjects",
    getInitialState: function() {
        return {
              selected: 'Select Tools...'
        };
    },
    
    addToDownload: function(event) {
      this.setState({selected: event.target.value});
      if(event.target.value != "Select Tools..."){
        this.props.addSelection(this.props.selections[event.target.value]);
      }
    },

    getSelections: function(){
      var options = [];
      for(var selection in this.props.selections){
        if (this.props.selections.hasOwnProperty(selection)){
          options.push(React.createElement("option", {key: selection, value: selection}, selection));        }
      }
      return options;
    },

    render: function(){
      
      var options = this.getSelections();

      return(
        React.createElement("select", {value: this.state.selected, onChange: this.addToDownload}, 
          React.createElement("option", {value: "Select Tools..."}, "Select Tools..."), 
          options
        )
        );
    }
})

var DownloadButtons = React.createClass({displayName: "DownloadButtons",
  makeToolButtons: function(){
    var buttons = [];
    for(var i=0; i < this.props.current.length; i++){
      buttons.push(React.createElement("div", {className: "tool-button"}, 
        this.props.current[i].text
      ));
    }
    return buttons;
  },

  render: function() {
    var toolButtons = this.props.current.length ? this.makeToolButtons() : null;
    return (
      React.createElement("div", {className: "downloads"}, 
        React.createElement("p", null, "These are the current Downloads"), 
        React.createElement("div", null, 
          toolButtons
        )
      )

      )
  }
})
