import {Component} from "react";
            
class TotalApiCategory extends Component {

    state = {
        categorias: [],
    };
    
    componentDidMount() {
        console.log("montado");
        fetch("http://localhost:3001/api/productos/categorias")
          .then((r) => r.json())
          .then((respuesta) => {
            console.log(respuesta);
            this.setState({ categorias: respuesta.data });
          })
          .catch((error) => console.log(error));
          
    }
    
    render(){
        console.log(this.state.categorias[0]);
        const total =this.state.categorias.length
        return(
            <div>
                        <p>{total}</p>
            </div>
        )
    }
}

export default TotalApiCategory