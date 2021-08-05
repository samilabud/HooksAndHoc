import React, {useState, useEffect} from 'react';
import './randomAPI.styles.css';  

const RandomAPI = () => {
  const [dataAPI, setDataAPI] = useState({});
  const [page, setPage] = useState(1);

  useEffect(()=>{

    getData();
  },[page])

  async function getData(){
    const url = `https://randomuser.me/api/?page=${page}&results=1&seed=abc`;
    let response = await fetch(url);
    response = await response.json();
    
    setDataAPI(response.results[0] || {});
  }

  return(
    
      <div id="container">
        {(Object.entries(dataAPI).length>0) ?
        <div className="card-container">
          <img className="round" src={dataAPI.picture.large} alt="user" />
          <h3>{dataAPI.name.title+ ' '+ dataAPI.name.first + ' ' + dataAPI.name.last}</h3>
          <h6>{dataAPI.location.country}</h6>
          <p>{dataAPI.email}</p>
          <div className="buttons">
            <button className="primary" onClick={getData} style={{cursor:'pointer'}}>
              Call
            </button>
            <button className="primary ghost">
            {dataAPI.cell }
            </button>
          </div>
          <div className="skills">
            <h6>Pagination</h6>
            <ul>
              <li onClick={()=>setPage(1)}>First</li>
              <li onClick={()=>setPage(page+1)}>Next</li>
              <li style={{textDecoration:'none',cursor:'default'}}>Current: {page}</li>
              <li onClick={()=>{(page>1)?setPage(page-1):alert('Page is one!')}}>Prev</li>
              <li onClick={()=>setPage(page+10)}>Next 10</li>
            </ul>
          </div>
        </div>
        
    :
      'Loading...'
    }
      </div>
  )
}

export default RandomAPI;
