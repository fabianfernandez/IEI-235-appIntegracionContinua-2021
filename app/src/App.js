import React from "react";
import './App.css';
import ListaOrganizadores from "./components/listaOrganizadores";
import CrearOrganizadores from "./components/crearOrganizadores";

const data = [
  { 
    nombre: "fabian", 
    email: "fabian.fernandeza@sansano.usm.cl", 
    apellidoPaterno: "fernandez",
    apellidoMaterno: "alfaro",
    rut: "19548707-3",
    fechaNacimiento: "03/08/2021",
    telefonoPersonal: "972364692",
    clubOrganizacion: "UTFSM",
    direccionOrganizacion: "valparaiso",
    telefonoCorporativo: "997142374",
    webOrganizacion: "www.google.com",
  },
  { 
    nombre: "maria", 
    email: "maria.alfaro.2021@gmail.com", 
    apellidoPaterno: "alfaro",
    apellidoMaterno: "villalobos",
    rut: "8333123-2",
    fechaNacimiento: "03/08/2021",
    telefonoPersonal: "922364562",
    clubOrganizacion: "Ninguna",
    direccionOrganizacion: "valparaiso",
    telefonoCorporativo: "993156774",
    webOrganizacion: "www.google.com",
  },
];

class App extends React.Component {
  state = {
    data: data,
    form: { 
      nombre: "", 
      email: "", 
      apellidoPaterno: "",
      apellidoMaterno: "",
      rut: "",
      fechaNacimiento: "",
      telefonoPersonal: "",
      clubOrganizacion: "",
      direccionOrganizacion: "",
      telefonoCorporativo: "",
      webOrganizacion: "",
    },
  };

  eliminarOrganizador = (organizador) =>{
    let arreglo = this.state.data;
    arreglo.splice(arreglo.indexOf(organizador),1);
    this.setState({
      data: arreglo,
    })
  }

  crearOrganizador =(event) =>{
    let arreglo = this.state.data;
    let organizador = this.state.form;
    arreglo.push(organizador);
    this.setState({
      data: arreglo,
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      form : {
        ...this.state.form,
        [event.target.name]:event.target.value
      }
    });
  }


  render(){
    console.log(this.state.data);
    return (
      <div className="App">
      <ListaOrganizadores
        eliminarOrganizador = {this.eliminarOrganizador}
        data = {this.state.data}
      ></ListaOrganizadores>
      <CrearOrganizadores
        crearOrganizador = {this.crearOrganizador}
        form = {this.state.form}
        onChange = {this.handleChange}
      ></CrearOrganizadores>
      </div>
    );
  }
}

export default App;
