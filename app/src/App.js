import React from "react";
import './App.css';
import ListaOrganizadores from "./components/listaOrganizadores";
import CrearOrganizadores from "./components/crearOrganizadores";
import EditarOrganizadores from "./components/editarOrganizador";

const data = [
  { 
    nombre: "fabian", 
    email: "fabian.fernandeza@sansano.usm.cl", 
    apellidoPaterno: "fernandez",
    apellidoMaterno: "alfaro",
    rut: "19548707-3",
    fechaNacimiento: "2020-03-02",
    telefonoPersonal: "972332692",
    clubOrganizacion: "UTFSM",
    direccionOrganizacion: "valparaiso",
    telefonoCorporativo: "997142324",
    webOrganizacion: "www.google.com",
  },
];

class App extends React.Component {
  state = {
    data: data,
    formCrearOrganizador: { 
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
    formEditarOrganizador: { 
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
    let organizador = this.state.formCrearOrganizador;
    arreglo.push(organizador);
    this.setState({
      data: arreglo,
    })
    event.preventDefault();
  }

  editarOrganizador = (event)=>{
    let organizadorEditado = this.state.formEditarOrganizador;
    let arregloOrganizadores = this.state.data;
    arregloOrganizadores.forEach(organizador => {
      if(organizador.email === organizadorEditado.email){
        this.eliminarOrganizador(organizador);
        arregloOrganizadores.push(organizadorEditado);
        this.setState({
          data: arregloOrganizadores,
        })
        event.preventDefault();
      }
    });
  }
  seleccionarOrganizador = (organizador) => {
    this.setState({
      formEditarOrganizador:{
        nombre: organizador.nombre, 
        email: organizador.email, 
        apellidoPaterno: organizador.apellidoPaterno,
        apellidoMaterno: organizador.apellidoMaterno,
        rut: organizador.rut,
        fechaNacimiento: organizador.fechaNacimiento,
        telefonoPersonal: organizador.telefonoPersonal,
        clubOrganizacion: organizador.clubOrganizacion,
        direccionOrganizacion: organizador.direccionOrganizacion,
        telefonoCorporativo: organizador.telefonoCorporativo,
        webOrganizacion: organizador.webOrganizacion,
      }
    });
  }
  handleChangeForm1 = (event) => {
    this.setState({
      formCrearOrganizador : {
        ...this.state.formCrearOrganizador,
        [event.target.name]:event.target.value
      }
    });
  }

  handleChangeForm2 = (event) => {
    this.setState({
      formEditarOrganizador : {
        ...this.state.formEditarOrganizador,
        [event.target.name]:event.target.value
      }
    });
  }

  


  render(){
    return (
      <div className="App">
        <div class="row">
          <div class="container">
              <ListaOrganizadores
              eliminarOrganizador = {this.eliminarOrganizador}
              seleccionarOrganizador = {this.seleccionarOrganizador}
              data = {this.state.data}
              ></ListaOrganizadores>
          </div>
        </div>
        <div class="row">
          <div class="col-md 6">
            <div class="container">
              <CrearOrganizadores
                crearOrganizador = {this.crearOrganizador}
                form1 = {this.state.formCrearOrganizador}
                onChange1 = {this.handleChangeForm1}
              ></CrearOrganizadores>
            </div>
          </div>
          <div class="col-md 6">
            <div class="container"> 
              <EditarOrganizadores
                editarOrganizador={this.editarOrganizador}
                form2 = {this.state.formEditarOrganizador}
                onChange2 = {this.handleChangeForm2}
              ></EditarOrganizadores>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
