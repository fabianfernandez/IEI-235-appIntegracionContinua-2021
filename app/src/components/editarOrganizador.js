import React from "react";

class EditarOrganizadores extends React.Component {
    render(){
        const form2 = this.props.form2;
        const onChange2 = this.props.onChange2;
        return (
            <div>
                <h4>Editar Organizador</h4>
                <form onSubmit={this.props.editarOrganizador}>
                    <div class="form-group"> 
                        <input type="text" id="nombre1" name="nombre" required placeholder="Nombre" onChange={onChange2} value={form2.nombre}></input>
                    </div>
                    <div class="form-group" hidden="true"> 
                        <input type="email" id="email1" name="email" required placeholder="Email" onChange={onChange2} value={form2.email}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="apellidoPaterno1" name="apellidoPaterno" required placeholder="Apellido Paterno" onChange={onChange2} value={form2.apellidoPaterno}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="apellidoMaterno1" name="apellidoMaterno" placeholder="Apellido Materno" onChange={onChange2} value={form2.apellidoMaterno}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="rut1" name="rut1" required placeholder="Rut" onChange={onChange2} value={form2.rut}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="date" required id="fechaNacimiento1" name="fechaNacimiento"  onChange={onChange2} value={form2.fechaNacimiento}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="number" id="telefonoPersonal1" name="telefonoPersona" placeholder="telefonoPersonal" onChange={onChange2} value={form2.telefonoPersonal}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="clubOrganizacion1" name="clubOrganizacion" required placeholder="clubOrganizacion" onChange={onChange2} value={form2.clubOrganizacion}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="direccionOrganizacion1" name="direccionOrganizacion" placeholder="direccionOrganizacion" onChange={onChange2} value={form2.direccionOrganizacion}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="number" id="telefonoCorporativo1" name="telefonoCorporativo" placeholder="telefonoCorporativo" onChange={onChange2} value={form2.telefonoCorporativo}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="url" id="webOrganizacion1" name="webOrganizacion" placeholder="webOrganizacion" onChange={onChange2} value={form2.webOrganizacion}></input>
                    </div>
                    <button class="btn btn-primary" type="submit">Editar</button>
                    
                </form>
            </div>
        );
  }
}

export default EditarOrganizadores;