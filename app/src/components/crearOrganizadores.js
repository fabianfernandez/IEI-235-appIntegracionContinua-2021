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



class CrearOrganizadores extends React.Component {
  state = {
    data: data,
  };

  render(){
    return (
        <div>
            <h4>Crear Organizadores</h4>
            <form>
                <div class="form-group"> 
                    <input type="text" id="nombre" required placeholder="Nombre"></input>
                </div>
                <div class="form-group"> 
                    <input type="email" id="email" required placeholder="Email"></input>
                </div>
                <div class="form-group"> 
                    <input type="text" id="apellidoPaterno" required placeholder="Apellido Paterno"></input>
                </div>
                <div class="form-group"> 
                    <input type="text" id="apellidoMaterno" placeholder="Apellido Materno"></input>
                </div>
                <div class="form-group"> 
                    <input type="text" id="rut" required placeholder="Rut"></input>
                </div>
                <div class="form-group"> 
                    <input type="date" required id="fechaDeNacimiento"></input>
                </div>
                <div class="form-group"> 
                    <input type="number" id="telefonoPersonal" placeholder="telefonoPersonal"></input>
                </div>
                <div class="form-group"> 
                    <input type="text" id="clubOrganizacion" required placeholder="clubOrganizacion"></input>
                </div>
                <div class="form-group"> 
                    <input type="text" id="direccionOrganizacion" placeholder="direccionOrganizacion"></input>
                </div>
                <div class="form-group"> 
                    <input type="number" id="telefonoCorporativo" placeholder="telefonoCorporativo"></input>
                </div>
                <div class="form-group"> 
                    <input type="url" id="webOrganizacion" placeholder="webOrganizacion"></input>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
                
            </form>
        </div>
    );
  }
}

export default CrearOrganizadores;
