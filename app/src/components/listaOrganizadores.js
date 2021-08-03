import React from "react";

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



class ListaOrganizadores extends React.Component {
  state = {
    data: data,
  };

  editarOrganizador=()=>{

  };

  eliminarOrganizador=()=>{

  };
  render(){
    return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Club</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
      {this.state.data.map((organizador)=>(
              <tr>
                <th scope="row">{organizador.nombre}</th>
                <td>{organizador.apellidoPaterno}</td>
                <td>{organizador.email}</td>
                <td>{organizador.clubOrganizacion}</td>
                <td>
                  <button class="btn btn-primary" onClick={this.editarOrganizador}>Editar</button>
                  <button class="btn btn-danger" onClick={this.eliminarOrganizador}>Eliminar</button>
                </td>
              </tr>
      ))}
      </tbody>
    </table>
    );
  }
}

export default ListaOrganizadores;
