import {Component} from "react";

class ApiUser extends Component {

    state = {
        usuarios: [],
    };
    
    componentDidMount() {
        console.log("montado");
        fetch("http://localhost:3001/api/user/LastUser")
          .then((r) => r.json())
          .then((respuesta) => {
            console.log(respuesta);
            this.setState({ usuarios: respuesta.data });
          })
          .catch((error) => console.log(error));
          
    }
    
    render(){
        console.log(this.state.usuarios[1]);
        return(
            <div>
                {Object.values(this.state.usuarios).map(e=>{
                    return(<>
                        <p>{e}</p>    
                        </>
                    )
                })}
            </div>
        )
    }
}

export default ApiUser