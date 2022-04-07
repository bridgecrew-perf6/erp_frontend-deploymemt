import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import EmpTable from "./Employee/EmpTable";
import AddEmployee from "./Employee/AddEmployee";

const Employee = () => {
  const [addEmp, setAddEmp] = React.useState(false);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component={"div"}>
          Employee{" "}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setAddEmp(true);
            }}
          >
            Add Employee
          </Button>
        </Box>
      </Box>

      <br />
      <EmpTable />
      {addEmp ? <AddEmployee addEmp={addEmp} setAddEmp={setAddEmp} /> : null}
    </Box>
  );
};

export default Employee;
