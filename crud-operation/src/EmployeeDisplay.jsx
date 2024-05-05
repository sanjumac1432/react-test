import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";


export const Employeedisplay = (props) => {
  console.log(props);

  const { handelopne,open } = props;

  const [data, setdata] = useState([]);
  const [id, setid] = useState(0);

 const Deleteinfo = (id)=>{
  fetch("https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee" + id,{
    method:"Delete"
  }).then(y=>{
    return y.json();
  }).then(y=>{

    setid(id);
    console.log(y);
  })
 }



  useEffect(() => {
    fetch("https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee")
      .then((y) => y.json())
      .then((y) => {
        setdata(y);
      });
  }, [id,open]);

  const columns = [
    { field: "firstname", headerName: "First Name", width: 150 },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "avatar",
      renderCell: (param) => {
        return <img src={param.row.avatar}></img>;
      },
    },

    {
      field : id , headerName : "", width:300, renderCell : (params)=>{
        // console.log(params.row)
        return (<>
          <Button
             variant="contained"
             size="small"
             style={{ marginLeft: 16 }}
            onClick={()=>{
              handelopne(params.row)
            }}
           >
             Edit
           </Button>
   
           <Button
             variant="contained"
             size="small"
             style={{ marginLeft: 16 }}
             onClick={()=>{

                Deleteinfo(params.id);
             }}
           >
             Delete
           </Button>
         
         
         </>)
      }
    }
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};
