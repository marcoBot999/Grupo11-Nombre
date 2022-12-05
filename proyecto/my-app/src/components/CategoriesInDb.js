import { Component } from "react";

class CategoriesInDb extends Component {
  state = {
    productos: [],
  };

  componentDidMount() {

    fetch("http://localhost:3001/api/productos/")
      .then((r) => r.json())
      .then((respuesta) => {
        console.log(respuesta);
        this.setState({ productos: respuesta });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorias
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div>
                  <p className="card bg-dark text-white shadow">Componentes: {this.state.productos.componentes}</p>
                  <p className="card bg-dark text-white shadow">Portátiles: {this.state.productos.portatiles}</p>
                  <p className="card bg-dark text-white shadow">Pc Armadas: {this.state.productos.pcArmadas}</p>
                  <p className="card bg-dark text-white shadow">Periféricos: {this.state.productos.perifericos}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default CategoriesInDb;
