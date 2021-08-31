import jwt from "jsonwebtoken";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import {useHistory } from "react-router-dom";

export function Navbar(loggedin){
    const history = useHistory();
    let token = jwt.decode(localStorage.getItem("token"));
    let email = localStorage.getItem("email");
    if(token == null ){
        return(
            <div>  <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => history.push('/login')}
            >
                login
            </Button>

            <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => history.push('/register')}
            >
                Register
            </Button>
            
            </div>
        )
    }
    if(Date.now() <= token.exp * 1000 && token!=null){
        
        if(loggedin=true){
            return(
                <div>

                
                <h4> You are logged in as: {email} </h4>
                <Button
                    color="info"
                    size="sm"
                    className="mt-3"
                    onClick={() => {
                        localStorage.clear();
                        localStorage.removeItem("email");
                        localStorage.removeItem("token");
                         window.location.reload(false);}}
            >
                logout
            </Button>
                </div>
            );
        }else{
            <h1> Login</h1>
        }
    }else{
        console.log(jwt.verify)
        console.log(token.exp)
        return (<div></div>)
    }
        
    
}