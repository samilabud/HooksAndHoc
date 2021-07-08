import {useEffect,useState} from 'react';

const apiURL = 'https://jsonplaceholder.typicode.com/users';



export const UserList = ({userSetter}) =>{
    const [apiUsers, setapiUsers] = useState([{id:'',name:''}]);
   
    /**/
    useEffect(()=>{
        let users = [];
        //fetch
        fetch(apiURL)
        .then(data=>data.json())
        .then(data=>data.map(value=>(
                users.push({name:value.name,id:value.id})
            ))
        )
        setTimeout(()=>{
            setapiUsers(users);
            if(users.length<=0)
                console.log("Error consiguiendo los usuarios. Favor revisar su conexion a internet.");
        },500)
    },[])

    const onUserListChange = (event) =>{
        const {value} = event.target;
        userSetter(value)

    }
    return(
        <select name='userList' onChange={onUserListChange}>
            <option key='0' value=''>Seleccione un usuario</option>
            {
                apiUsers.map(
                    data=>(<option key={data.id} value={data.id}>{data.name}</option>)
                )
            }
        </select>
        
    )
}


export default UserList;