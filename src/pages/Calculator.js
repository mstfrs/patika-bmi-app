import {
  
  Button,
  Container, Icon, InputAdornment, TextField,
  
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import {useState} from "react";

const Calculator = () => {
  const [user, setUser] = useState({name:"",weight:"",height:""})


function handleChangeName(e) {
  
  setUser({...user,name:e.target.value})
  
  
}
function handleChangeWeight(e) {
  
  setUser({...user,weight:e.target.value})
  
  
}
function handleChangeHeight(e) {
  
  setUser({...user,height:e.target.value})
  
  
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(user)
  
}
  return (
    <div style={{width:"100vh", paddingBottom:"5rem"}}>
      <Container maxWidth="sm" style={{ height: "40vh", width:"20rem",padding: "20px", backgroundColor:"white" , marginTop :"50px"}}>
        

<form onSubmit={handleSubmit}>
<TextField
          label="Your Name"
          id="outlined-start-adornment"
          // className={clsx(classes.margin, classes.textField)}
          
          variant="outlined"
          onChange={handleChangeName}
        /><br/><br/><br/>
<TextField
          label="Your Weight"
          id="outlined-start-adornment"
          // className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
          variant="outlined"
          onChange={handleChangeWeight}
        /><br/><br/><br/>
<TextField
          label="Your Height"
          id="outlined-start-adornment"
          // className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Cm</InputAdornment>,
          }}
          variant="outlined"
          onChange={handleChangeHeight}
        /><br/><br/><br/>
        
        <Button
        type="submit"
        variant="contained"
        color="primary"
        // className={classes.button}
        endIcon={<SendIcon/>}
      >
        Calculate
      </Button>
     
        {/* <input type="submit" value="Submit" /> */}
      </form>
      </Container>
    </div>
  );
};

export default Calculator;
