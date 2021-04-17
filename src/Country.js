import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";

export default function Country(){
    const history = useHistory();
    const params = new URLSearchParams(useLocation().search);
    const name = params.get("name");
    return(
        <div className="container">
            <h1> {name}</h1>
            <p>The country that you selected was: {name} </p>
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