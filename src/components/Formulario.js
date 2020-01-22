import React, {useContext, useState} from 'react';
import {CategoriasContext} from "../context/CategoriasContext";


const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    //funcion para leer contenidos
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.name
        });
    }


    return (
        <form className="col-12">
            <fieldset>
                <legend>Busca bebidas por categoría o por ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por ingrediente"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;
