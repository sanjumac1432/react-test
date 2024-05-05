import React from 'react'

import { useState } from 'react'
import { Button } from '@mui/material'

import { EmployeeFrom } from './EmployeeForm'
import { Employeedisplay } from './EmployeeDisplay'
export const MainParentemployee = () => {


    const [d, setd]= useState(null)
    const [open,setopne] = useState(false)

    const handelclose=()=>{

setopne(false);
setd(null)

    }

    const handelopne =()=>{
        setopne(true);
    }

    const handleOpenForAdd= ()=>{

      setopne(true);
    }


  return (
    <div>

<Button
             variant="contained"
             size="small"
             style={{ marginLeft: 16 ,marginBottom:20 }}
            onClick={handleOpenForAdd}
           >
             add employee
           </Button>

        <Employeedisplay handelopne={handelopne}    open = {open}/>
        
        <EmployeeFrom handelclose={handelclose} open= {open} d={d}/>
    </div>
  )
}
