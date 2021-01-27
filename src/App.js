import React, {Component} from "react";
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state = {
    users: [
      {username: "Eirin"},
      {username: "Therese"},
      {username: "Marie"}
    ]
  }

/* The target here is the input field in the UserInput. The event is the change, or onChange event */
  nameChangedHandler = (event) => {

    this.setState({
      users:[
        {username: event.target.value},
        {username: event.target.value},
        {username: this.state.users[2].username}
      ]
    });
  }

  render(){
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} currentName={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
        <UserOutput username={this.state.users[2].username}/>
      </div>
    );
  }
}

export default App;
