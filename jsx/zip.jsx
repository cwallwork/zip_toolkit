var ToolkitSelect = React.createClass({
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
      <div className="zip-select">
        <DownloadButtons current={this.state.currentDownload}/>
        <SelectObjects addSelection={this.addSelection} selections={this.state.selections} current={this.state.currentDownload}/>
      </div>
      )
  }
});


var SelectObjects = React.createClass({
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
          options.push(<option key={selection} value={selection}>{selection}</option>);        }
      }
      return options;
    },

    render: function(){
      
      var options = this.getSelections();

      return(
        <select value={this.state.selected} onChange={this.addToDownload}>
          <option value="Select Tools...">Select Tools...</option>
          {options}
        </select>
        );
    }
})

var DownloadButtons = React.createClass({
  makeToolButtons: function(){
    var buttons = [];
    for(var i=0; i < this.props.current.length; i++){
      buttons.push(<div className="tool-button">
        {this.props.current[i].text}
      </div>);
    }
    return buttons;
  },

  render: function() {
    var toolButtons = this.props.current.length ? this.makeToolButtons() : null;
    return (
      <div className="downloads">
        <p>These are the current Downloads</p>
        <div>
          {toolButtons}
        </div>
      </div>

      )
  }
})
