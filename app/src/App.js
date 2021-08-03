import React from "react";
import './App.css';
import ListaOrganizadores from "./components/listaOrganizadores";
import CrearOrganizadores from "./components/crearOrganizadores";

class App extends React.Component {
  render(){
    return (
      <div className="App">
      <ListaOrganizadores></ListaOrganizadores>
      <CrearOrganizadores></CrearOrganizadores>
      </div>
    );
  }
}

export default App;
