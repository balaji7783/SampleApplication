import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const SearchGridComponents=(props) => 
{

const  columnDefs = [
      {
        headerName: "Make", field: "make" ,sortable: true, filter: true
      }, 
      {
        headerName: "Model", field: "model" ,sortable: true, filter: true
      }, 
      {
        headerName: "Price", field: "price",sortable: true, filter: true
      },
      {
        headerName: "Year", field: "year",sortable: true, filter: true
      },
      {
        headerName: "Version", field: "version",sortable: true, filter: true
      },
      {
        headerName: "Color", field: "color",sortable: true, filter: true
      },
      {
        headerName: "Variant", field: "variant",sortable: true, filter: true
      }
    ];

const rowData =  [
      {
        make: "Toyota", model: "Celica", price: 35000 , year:'2006', version : 'vxi' , color : 'red' , variant : 'petrol'
      }, 
      {
        make: "Ford", model: "Mondeo", price: 32000 , year:'2006', version : 'vxi' , color : 'red' , variant : 'petrol'
      },
      {
        make: "Porsche", model: "Boxter", price: 72000, year:'2006', version : 'vxi' , color : 'red' , variant : 'petrol'
      },
      {
        make: "Maruti",model:"Swift",price:90000, year:'2006', version : 'vxi' , color : 'red' , variant : 'petrol'
      }
];

function gridROwClickevent()
{
    alert("HI");
}

  return(
       <div className="ag-theme-alpine" style={{height: '1000px',fontSize:'20px'}}>
        <AgGridReact
          onCellClicked = {gridROwClickevent}
          columnDefs={columnDefs}
          rowData={rowData}>
        </AgGridReact>
      </div>
  );
};

export default SearchGridComponents;