import React,{useEffect,useState} from 'react';

const apiURL = 'https://jsonplaceholder.typicode.com/users';



export const UserList = ({userSetter}) =>{
    const [apiUsers, setapiUsers] = useState([{id:'',name:''}]);
   
    /**/
    useEffect(()=>{
        let users = [];
        //fetch
        const fetchData = async () => {
            const response = await fetch(apiURL);
            const resJson = await response.json();
            resJson.map(value=>(
                        users.push({name:value.name,id:value.id})
                    ))
            setapiUsers(users);
            if(users.length<=0)
                console.log("Error getting user list from API. Please check your internet connection.");
        }
        fetchData();
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