import React from "react";

class CrearOrganizadores extends React.Component {
    render(){
        const form = this.props.form;
        const onChange = this.props.onChange;
        return (
            <div>
                <h4>Crear Organizadores</h4>
                <form onSubmit={this.props.crearOrganizador}>
                    <div class="form-group"> 
                        <input type="text" id="nombre" name="nombre" required placeholder="Nombre" onChange={onChange} value={form.nombre}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="email" id="email" name="email" required placeholder="Email" onChange={onChange} value={form.email}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="apellidoPaterno" name="apellidoPaterno" required placeholder="Apellido Paterno" onChange={onChange} value={form.apellidoPaterno}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="apellidoMaterno" name="apellidoMaterno" placeholder="Apellido Materno" onChange={onChange} value={form.apellidoMaterno}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="rut" name="rut" required placeholder="Rut" onChange={onChange} value={form.rut}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="date" required id="fechaNacimiento" name="fechaNacimiento"  onChange={onChange} value={form.fechaNacimiento}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="number" id="telefonoPersonal" name="telefonoPersonal" placeholder="telefonoPersonal" onChange={onChange} value={form.telefonoPersonal}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="clubOrganizacion" name="clubOrganizacion" required placeholder="clubOrganizacion" onChange={onChange} value={form.clubOrganizacion}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="text" id="direccionOrganizacion" name="direccionOrganizacion" placeholder="direccionOrganizacion" onChange={onChange} value={form.direccionOrganizacion}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="number" id="telefonoCorporativo" name="telefonoCorporativo" placeholder="telefonoCorporativo" onChange={onChange} value={form.telefonoCorporativo}></input>
                    </div>
                    <div class="form-group"> 
                        <input type="url" id="webOrganizacion" name="webOrganizacion" placeholder="webOrganizacion" onChange={onChange} value={form.webOrganizacion}></input>
                    </div>
                    <button class="btn btn-primary" type="submit">Enviar</button>
                    
                </form>
            </div>
        );
  }
}

export default CrearOrganizadores;
