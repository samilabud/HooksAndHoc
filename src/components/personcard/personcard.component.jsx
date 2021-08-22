import React from 'react';

export const PersonCard = (props) => {
  const {name,country,email,cell,imglarge, fnSetPage, page} = props;
  
  return (
      <div className="card-container">
            <img className="round" src={imglarge} alt="user" />
            <h3>{name.title+ ' '+ name.first + ' ' + name.last}</h3>
            <h6>{country}</h6>
            <p><a href={'mailto:'+email}>{email}</a></p>
            <div className="buttons">
              <a className="primary" href={'tel:'+cell  }>
                Call
              </a>
              <button className="primary ghost">
              {cell }
              </button>
            </div>
            <div className="skills">
              <h6>Pagination</h6>
             {<ul>
                <li onClick={()=>fnSetPage(1)}>First</li>
                <li onClick={()=>fnSetPage(page+1)}>Next</li>
                <li style={{textDecoration:'none',cursor:'default'}}>Current: {page}</li>
                <li onClick={()=>{(page>1)?fnSetPage(page-1):alert('Page is one!')}}>Prev</li>
                <li onClick={()=>fnSetPage(page+10)}>Next 10</li>
              </ul>}
            </div>
          </div>
       
  )
}

export default React.memo(PersonCard);