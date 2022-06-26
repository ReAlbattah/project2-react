import { MenuItem, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Category from "../components/Category"
import ErrorMsg from "../components/ErrorMsg"


const Home = ({name,setName,fetchQuestions}) => {

    const [category,setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const submit=()=>{
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quiz");
        }
    }

  return <div className="card">
    
    <div className="settings__select">
        <div>
   <span style={{fontSize:30}}>Select to start Quiz  </span>
   </div>
   <hr/>

   {error && <ErrorMsg>Please Fill all the feilds</ErrorMsg>}

   <TextField label='Enter Your name ..' variant="outlined" onChange={(e) => setName(e.target.value)}
 />
   <br/>
   <TextField select label='select category' variant="outlined"  value={category}
            onChange={(e) => setCategory(e.target.value)} >
   {Category.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
    
   </TextField>
   <br/>
   <TextField select label='select difficulty' variant="outlined"    value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}  >
   <MenuItem key="Easy" value="Easy">
    Easy
   </MenuItem>
   <MenuItem key="Medium" value="Medium">
   Medium
   </MenuItem>
   <MenuItem key="Hard" value="Hard">
   Hard
   </MenuItem>
    
   </TextField>
   <br/>
   <Button
    variant="contained" color="secondary" size="large" onClick={submit}>
            Start Quiz
    </Button>
   
   </div>

  </div>
  
};

export default Home;
