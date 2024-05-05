import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import * as Yup  from 'yup'

export const EmployeeFrom = (props) => {
  const validationshcam = ()=>{

    return Yup.object().shape({ 
        firstname : Yup.string().required("first name is required"),
        lastname : Yup.string().required("last name is required"),
        email: Yup.string().required("emai is required").email("email is invalid"),
        contactnumber : Yup.string().required("number is required")
       
       




    })


}


  const { handelclose , open , d} = props;


  const [data,setdata]= useState({
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
  })

  console.log(data)

  useEffect(()=>{

    if(d)
    {
       
        setdata({...d,firstname:d.firstname,lastname: d.lastname, contactnumber:d.contactnumber, email:d.email});
    }

    console.log(d);

},[d])


const handleSave = ()=>{

  // let method1 = d? "PUT" : "POST"
  let url =  d? `https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/${data.id}` : "https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee";
  fetch(url,{
    method:d? "PUT" : "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type':"Application/json"
    }
  }).then(y=>y.json())
.then(y=>{

  setdata({  firstname: "",
  lastname: "",
  email: "",
  contactnumber: "",});
  handelclose();
  // setdata(y);
})

}

const handlechange = (e)=>{


    setdata({...data,[e.target.name]: e.target.value});

}
  
  return (
    <Dialog
      open={open}
      onClose={handelclose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handelclose();
        },
        validationshcam:{validationshcam}
      }}
    >
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="firstname"
          name="firstname"
          label="first name"
          type="text"
          fullWidth
          value={data?.firstname}
          variant="standard"
          onChange={handlechange}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="lastname"
          name="lastname"
          label="last name"
          type="text"
          value={data?.lastname}
          fullWidth
          variant="standard"
          onChange={handlechange}
        />
         <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="email"
          type="text"
          value={data?.email}
          fullWidth
          variant="standard"
          onChange={handlechange}
        />
          <TextField
          autoFocus
          required
          margin="dense"
          id="contactnumber"
          name="contactnumber"
          label="contact number"
          type="number"
          value={data?.contactnumber}
          fullWidth
          variant="standard"
          onChange={handlechange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handelclose}>Cancel</Button>
        <Button type="button" onClick={handleSave}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}
