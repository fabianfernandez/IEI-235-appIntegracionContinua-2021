import React from "react";

class ListaOrganizadores extends React.Component {

  render(){
    const eliminarOrganizador=this.props.eliminarOrganizador;
    const seleccionarOrganizador = this.props.seleccionarOrganizador;
    const data = this.props.data;
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
      {data.map((organizador)=>(
              <tr>
                <th scope="row">{organizador.nombre}</th>
                <td>{organizador.apellidoPaterno}</td>
                <td>{organizador.email}</td>
                <td>{organizador.clubOrganizacion}</td>
                <td>
                  <button class="btn btn-primary" onClick={()=>seleccionarOrganizador(organizador)}>Editar</button>
                  <button class="btn btn-danger" onClick={()=>eliminarOrganizador(organizador)}>Eliminar</button>
                </td>
              </tr>
      ))}
      </tbody>
    </table>
    );
  }
}

export default ListaOrganizadores;
