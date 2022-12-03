import {Component} from "react";

class TotalApiUser extends Component {

    state = {
        usuarios: [],
    };
    
    componentDidMount() {
        console.log("montado");
        fetch("http://localhost:3001/api/user/")
          .then((r) => r.json())
          .then((respuesta) => {
            console.log(respuesta);
            this.setState({ usuarios: respuesta.data });
          })
          .catch((error) => console.log(error));
          
    }
    
    render(){
        console.log(this.state.usuarios);
        const total =this.state.usuarios.length
        return(
            <div>
                        <p>{total}</p>    
            </div>
        )
    }
}

export default TotalApiUser