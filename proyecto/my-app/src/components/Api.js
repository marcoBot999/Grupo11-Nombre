import {Component} from "react";

class TraerApi extends Component {

    state = {
        productos: [],
    };
    
    componentDidMount() {
        console.log("montado");
        fetch("http://localhost:3001/api/productos")
          .then((r) => r.json())
          .then((respuesta) => {
            console.log(respuesta);
            this.setState({ productos: respuesta.data });
          })
          .catch((error) => console.log(error));
          
    }
    
    render(){
        console.log(this.state.productos[0]);
        return(
            <div>
                {this.state.productos.map(e=>{
                    return(
                        <p>{e.name}</p>
                    )
                    
                })}
            </div>
        )
    }
}

export default TraerApi