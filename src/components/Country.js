import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import { CountryApiTable } from "./table.js";
import {  ExampleChart } from "./charts.js";
import { useCountries } from "../api";
// import { ExampleChart } from"./testchart";



export default function Country(){
    const history = useHistory();
    const params = new URLSearchParams(useLocation().search);
    const name = params.get("name");

    const { loading, countires, error } = useCountries(null,name);
    var years = [ ];
    var scores = [ ];
    var ranks = [ ];

    if (loading) {
        return <p>Loading...</p>;
    }
    
        
        countires.forEach(country => {
            years.push(country.year);
            scores.push(parseFloat(country.score));
            ranks.push(country.rank);
        });

    
    
    
    
    
    return(
        <div className="container">
            <h1> {name}</h1>
            <p>Showing historical hapiness data for {name} </p>
            <CountryApiTable country={name} />
            <ExampleChart data={ranks} labels={years}/>
         
            <Button
            color="info"
            size="sm"
            className="mt-3"
            onClick={() => history.goBack()}
            >
                Back
            </Button>
        </div>
    );
}