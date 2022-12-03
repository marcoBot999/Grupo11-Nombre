import {Component} from "react";
            
class TotalApiProductosCategory extends Component {

    state = {
        productos: [],
    };
    
    componentDidMount() {
        console.log("montado");
        fetch("http://localhost:3001/api/productos/")
          .then((r) => r.json())
          .then((respuesta) => {
            console.log(respuesta);
            this.setState({ productos: respuesta });
          })
          .catch((error) => console.log(error));
          
    }
    
    render(){
        console.log(this.state.productos[0]);
        const componentes =this.state.productos.componentes
        const portatiles=this.state.productos.portatiles
        const pcArmadas=this.state.productos.pcArmadas
        const perifericos=this.state.productos.perifericos
        return(
            <div>
                        <p>componentes:{componentes}</p>
                        <p>portatiles:{portatiles}</p>
                        <p>Pc Armadas:{pcArmadas}</p>
                        <p>perifericos:{perifericos}</p>
            </div>
        )
    }
}

export default TotalApiProductosCategory