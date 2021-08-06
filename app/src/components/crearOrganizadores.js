import React from "react";

class CrearOrganizadores extends React.Component {
    render(){
        const form1 = this.props.form1;
        const onChange1 = this.props.onChange1;
        return (
            <div>
                <h4>Crear Organizadores</h4>
                <form onSubmit={this.props.crearOrganizador}>
                    <div class="form-group"> 
                        <input type="text" id="nombre" name="nombre" required placeholder="Nombre" onChange={onChange1} value={form1.nombre}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="email" id="email" name="email" required placeholder="Email" onChange={onChange1} value={form1.email}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="apellidoPaterno" name="apellidoPaterno" required placeholder="Apellido Paterno" onChange={onChange1} value={form1.apellidoPaterno}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="apellidoMaterno" name="apellidoMaterno" placeholder="Apellido Materno" onChange={onChange1} value={form1.apellidoMaterno}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="rut" name="rut" required placeholder="Rut" onChange={onChange1} value={form1.rut}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="date" required id="fechaNacimiento" name="fechaNacimiento"  onChange={onChange1} value={form1.fechaNacimiento}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="number" id="telefonoPersonal" name="telefonoPersonal" placeholder="telefonoPersonal" onChange={onChange1} value={form1.telefonoPersonal}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="clubOrganizacion" name="clubOrganizacion" required placeholder="clubOrganizacion" onChange={onChange1} value={form1.clubOrganizacion}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="direccionOrganizacion" name="direccionOrganizacion" placeholder="direccionOrganizacion" onChange={onChange1} value={form1.direccionOrganizacion}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="number" id="telefonoCorporativo" name="telefonoCorporativo" placeholder="telefonoCorporativo" onChange={onChange1} value={form1.telefonoCorporativo}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="url" id="webOrganizacion" name="webOrganizacion" placeholder="webOrganizacion" onChange={onChange1} value={form1.webOrganizacion}></input>
                    </div>
                    <button class="btn btn-primary" type="submit">Crear</button>
                    
                </form>
            </div>
        );
  }
}

export default CrearOrganizadores;
