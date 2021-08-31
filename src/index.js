import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Country from "./components/Country";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import {YearApiTable, YearApiTableReg} from "./components/table.js";
import { LoginPage} from "./components/login.js"
import {RegisterPage} from "./components/register.js";
import {Navbar} from "./components/navbar.js";


let token = localStorage.getItem("token");
let email = localStorage.getItem("email");


  function App() {
  
    const [year, setYear] = useState(2020);
    console.log(token);
    console.log(email);
    
    function DisplayTable(props){
      var year = props.year;
      console.log(year)
        return(
          <div>
            
   
   {(token!=null && token.length > 0) &&
   <YearApiTableReg year={year}/>
    }

    {(token==null || token ==undefined) &&
    <YearApiTable year={year}/>
    }
          </div>
          
        )
    }

    return (
    <div> 
      <div className={styles.Container}>

      
    <Navbar/>
        <div className={styles.Center}>
        Showing results for {year} <br></br>
         <input type="text" id="searchtext"></input>

<select id="search" name="search">
    <option value="year">Year</option>
   
</select>

<Button
color="info"
size="sm"
className="mt-3"
onClick={() => {console.log(document.getElementById("search").value); 
           setYear(document.getElementById("searchtext").value);
           }}
>
Search
</Button>
            
            {/* <YearApiTable year={year}/> */}

           <DisplayTable year={year}/>
          
           
        
        </div> 
      </div>
    </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <switch>
        <Route path="/country">
          <Country/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route exact path="/">
          <App/>
        </Route>
      </switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
