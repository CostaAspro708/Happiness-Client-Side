
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function Register(email,password){
    const API_URL = "http://131.181.190.87:3000";
    const url = API_URL + "/user/register";
    console.log(email,password);
    return fetch(url, {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({email: email, password: password})

    })
    .then((res) => res.json())
    .catch((e) => console.log(e))
}

function RegisterResponse(props){
    var email = props.email;
    var password = props.password;
    const { loading, message, error } = useRegister(email,password);
   
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }

    return(
        <h1>{message.message}</h1>
    )

}
function useRegister(email,password){
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            Register(email,password).then((message) => {
            setMessage(message);
            setLoading(false);
            }).catch((e) => {
                setError(e);
                setLoading(false);
            })

    }, []);
    return {
        loading,
        message,
        error,
    }
}

export function RegisterPage(){

    const history = useHistory();

    const [regisered, setRegisered] = useState(0);
   // var regisered = false;
    useEffect(() => {

    });

    if(regisered === 0){
        return(
            <div>
               
                
            <h1>Register</h1>
    
       
    
            
    
                    
                   <h5>Email</h5><input type="text" id="email"></input>
                   <h5>Password</h5> <input type="password" id="password"></input>
                   <Button
                        type="submit"
                        color="info"
                        size="sm"
                        className="mt-3"
                        onClick={() => {

                            setRegisered(1)}}
                >
                    Submit
                </Button>
                <Button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => history.push('/login')}
                >
                    Login
                </Button>
                <Button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => history.goBack()}
                >
                    Back
                </Button>
            </div>
        )
    }else{

        return(
            <div>
             <RegisterResponse email={document.getElementById('email').value} password={document.getElementById('password').value}/> 
             <Button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => window.location.reload(false)}
                >
                    Back
                </Button>
        </div>
        )
        
    }
    
}