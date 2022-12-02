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
            this.setState({ productos: respuesta.meta });
          })
          .catch((error) => console.log(error));
          
    }
    
    render(){
        console.log("estoy renderizando");
        return(
            <div>
                <p>holaaaaaaa</p>
            </div>
        )
    }
}

export default TraerApi