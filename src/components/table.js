import { useCountries, useCountriesReg } from "../api";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




export function YearApiTable(props){
    
    const year = props.year
    const history = useHistory();
    const table = {
        columns: [
          { headerName: "Rank", field: "rank" },
          { headerName: "Country", field: "country" },
          { headerName: "Year", field: "year" },
          { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter"}
        ]
      }
      const { loading, countires, error } = useCountries(year);
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>No results for this input</p>;
      }
  
     
    return(
 
    <div className="ag-theme-balham"
        style={{
          height: "700px",
          width: "800px"
        }}
        >
          <AgGridReact
          columnDefs={table.columns}
          
          rowData={countires}
          pagination={true}
          paginationPageSize={100}
          onRowClicked={(row) => history.push('/country?name='+ row.data.country)}
          
          />
    </div>
    );
}

export function CountryApiTable(props){
  const country = props.country
  const table = {
      columns: [
        { headerName: "Year", field: "year" },
        { headerName: "Rank", field: "rank" },
        { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter"}
      ]
    }
    const { loading, countires, error } = useCountries(null,country);
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }

   
  return(

  <div className="ag-theme-balham"
      style={{
        height: "400px",
        width: "600px"
      }}
      >
        <AgGridReact
        columnDefs={table.columns}
        rowData={countires}
        pagination={true}
        paginationPageSize={100}
        
        
        />
  </div>
  );
}

export function YearApiTableReg(props){
  

    const history = useHistory();

    const { loading, countires, error } = useCountriesReg(props.year);
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Something went wrong: {error.message}</p>;
      }
    const table = {
        columns: [
          { headerName: "Rank", field: "rank" },
          { headerName: "Country", field: "country" },
          { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter"},
          { headerName: "Economy", field: "economy" },
          { headerName: "Family", field: "family" },
          { headerName: "Health", field: "health" },
          { headerName: "Freedom", field: "freedom" },
          { headerName: "Generosity", field: "generosity" },
          { headerName: "Trust", field: "trust" },

         
        ],

       coldefs: {
          // set every column width
          width: 100,
          // make every column editable
          editable: true,
          // make every column use 'text' filter by default
          filter: 'agTextColumnFilter',
      },
      }
      
  
     
    return(
      <div>
       
      
 
    <div className="ag-theme-balham"
        style={{
          height: "700px",
          width: "900px"
        }}
        >
          <AgGridReact
          columnDefs={table.columns}
          rowData={countires}
          defaultColDef={table.coldefs}
          pagination={true}
          paginationPageSize={100}
          onRowClicked={(row) => history.push('/country?name='+ row.data.country)}
          
          />
    </div>
    </div>
    );
}

