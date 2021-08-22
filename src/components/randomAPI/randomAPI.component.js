import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import PersonCard from '../personcard/personcard.component';
import './randomAPI.styles.css';  

const RandomAPI = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [page, setPage] = useState(1);
  let history = useHistory();
  
  useEffect(()=>{

    getData();
  },[page])

  const getData = async () =>{
    try{
      const url = `https://randomuser.me/api/?page=${page}&results=1&seed=abc`;
      let response = await fetch(url);
      response = await response.json();
      setDataAPI(response || []);
    }catch(err){
      console.log("An error happends, see message: ", err);
    }
  }
  let nameRedirected;
  try{
    nameRedirected = history.location.state.name;
  }catch(err){
    nameRedirected = '';
  }
    return(
    
      <div id="container">
        {nameRedirected?<span>{nameRedirected}</span>:''}
        {
          Object.entries(dataAPI).length ?
            dataAPI.results.map(
              ({name,location:{country}, email, cell, picture:{large}})=>(
                <PersonCard name={name} country={country} email={email} cell={cell} imglarge={large} 
                  key={dataAPI.info.page} fnSetPage={setPage} page={dataAPI.info.page} />
              )
            ):<span>Loading</span>
        }
       </div>
  )
}

export default RandomAPI;
