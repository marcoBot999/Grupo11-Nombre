import {Component} from "react";

class TotalApiProduct extends Component {

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
        console.log(this.state.productos);
        const total =this.state.productos.length
        return(
            <div>
                        <p>{total}</p>    
            </div>
        )
    }
}

export default TotalApiProduct