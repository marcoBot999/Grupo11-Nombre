import { Component } from "react";


class TableProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRowsData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((productos) => {

        this.setState({
          tableRowsData: productos.data
        });
      });
  }
  render() {
    return (

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>

          {this.state.tableRowsData.map((row) => {
            return (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
                <img
                  style={{ width: "60%" }}
                  src={"http://localhost:3001" + row.url_img}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableProducts;
