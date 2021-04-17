import { useNewsArticles } from "./api";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useHistory } from "react-router-dom";
function onGridReady(){
   
  
}

export function ApiTable(){
    const history = useHistory();
    const table = {
        columns: [
          { headerName: "Rank", field: "rank" },
          { headerName: "Country", field: "country" },
          { headerName: "Year", field: "year" },
          { headerName: "Score", field: "score", sortable: true, filter: "agNumberColumnFilter"}
        ]
      }
      const { loading, headlines, error } = useNewsArticles();
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Something went wrong: {error.message}</p>;
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
          rowData={headlines}
          pagination={true}
          paginationPageSize={100}
          onGridReady={onGridReady()}
          onRowClicked={(row) => history.push('/country?name='+ row.data.country)}
          
          />
    </div>
    );
}