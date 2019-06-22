import React, { Component } from "react";
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state={
      users: [],
      url: "https://jsonplaceholder.typicode.com/users",
    }
  }
  
  componentDidMount() {
    this.cargar(this.state.url);
  }
  
  cargar (url){
    console.log("Aqui estoy");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "applitacion/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({users: data});
      })
      .catch();
  }
  
  render (){
    return (
      
      <div className="App">
       <h1>Listado de usuarios</h1>
       <ul>
       
       {
         this.state.users.map((item, i) => {
           return <li key={i}>{item.name}</li>
         })
       }
       
       </ul>
      
      </div>
    );
  }
}

export default App;
