
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";


    export function apilogin(email,password){
        const API_URL = "http://131.181.190.87:3000";
        const url = API_URL + "/user/login";
        console.log(email,password);
        return fetch(url, {
            method: "POST",
            headers: { accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({email: email, password: password})

        })
        .then((res) => res.json())
        .then((res) => {
           localStorage.setItem("token", res.token);
           localStorage.setItem("email", email);
           

        })
    }

    function Login(email,password){
       
        apilogin(email,password);
       


    }

    export function LoginPage(){
        const history = useHistory();
       
        return(
            <div>
                <h1>Login</h1>

                
               <h5>Email</h5><input type="text" id="email"></input>
               <h5>Password</h5> <input type="password" id="password"></input>
               <Button
                    type="submit"
                    color="info"
                    size="sm"
                    className="mt-3"
                    onClick={() => {Login(document.getElementById('email').value,document.getElementById('password').value); setTimeout(function() {
                       history.push("/");
                      }, 1000);}}
            >
                Submit
            </Button>
            <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => history.push('/register')}
            >
                Register
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
    }


