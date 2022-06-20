import React, { useEffect, useState } from 'react'
import { obtenerTodasMarcas } from '../../services/MarcaService';
import { obtenerTodosEquipos } from '../../services/TiposEquipos';
import { obtenerTodosUsuarios } from '../../services/UsuarioService';

export default function Modal({inventario, changeInventario}) {
    const [usuarios, setUsuarios] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [tiposEquipos, setTiposEquipos] = useState([]);
    
    useEffect( () => {
        const getUsuarios = () => {
            obtenerTodosUsuarios()
            .then(r => {
                console.log(r);
                setUsuarios(r.data)
            }).catch(e => {
                console.log(e)
            })
        }
        getUsuarios();
      }, []);


    useEffect( () => {
      const getUsuarios = () => {
        obtenerTodasMarcas()
          .then(r => {
              console.log(r);
              setMarcas(r.data)
          }).catch(e => {
              console.log(e)
          })
      }
      getUsuarios();
    }, []);


    useEffect( () => {
      const getUsuarios = () => {
        obtenerTodosEquipos()
          .then(r => {
              console.log(r);
              setTiposEquipos(r.data)
          }).catch(e => {
              console.log(e)
          })
      }
      getUsuarios();
    }, []);



  return (
    <div
      className="modal fade"
      id="modalInventarios"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar Inventario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="serial" class="form-label">
                    Serial
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="serial"
                    placeholder=""
                    name="serial"
                    value={inventario.serial}
                    required
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="modelo" className="form-label">
                    Modelo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelo"
                    placeholder=""
                    required
                    name="modelo"
                    value={inventario.modelo}
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label for="descripcion" class="form-label">
                    Descripción
                    <span className="text-muted">(Optional)</span>
                  </label>
                  <div className="input-group has-validation">
                    <textarea
                      name="descripcion"
                      className="form-control"
                      id="descripcion"
                      placeholder="Descripción..."
                      value={inventario.descripcion}
                      onChange={changeInventario}
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label for="color" class="form-label">
                    Color <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="color"
                    placeholder="verde"
                    name="color"
                    value={inventario.color}
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="precio" class="form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="precio"
                    name="precio"
                    placeholder="1000"
                    value={inventario.precio}
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="usuario" class="form-label">
                    Usuario
                  </label>
                  <select className="form-select" id="usuario" required="">
                    <option value="">Usuario</option>
                    {usuarios.map((u) => {
                      return <option value={u._id}>{u.nombre}</option>;
                    })}
                  </select>
                </div>



                <div className="col-md-3">
                  <label for="estado" className="form-label">
                    Estado
                  </label>
                  <select
                    className="form-select"
                    id="estado"
                    required=""
                    value={inventario.estado}
                  >
                    <option value="">Estado</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="usuario" class="form-label">
                    Marcas
                  </label>
                  <select className="form-select" id="usuario" required="">
                    <option value="">Marcas</option>
                    {marcas.map((u) => {
                      return <option value={u._id}>{u.nombre}</option>;
                    })}
                  </select>
                </div>

                <div className="col-md-3">
                  <label for="usuario" class="form-label">
                    Tipos Equipos
                  </label>
                  <select className="form-select" id="usuario" required="">
                    <option value="">Tipos Equipos</option>
                    {tiposEquipos.map((u) => {
                      return <option value={u._id}>{u.nombre}</option>;
                    })}
                  </select>
                </div>



              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}
