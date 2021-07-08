import  {useState, useEffect} from 'react';
import UserList from './components/userslist/userlist.component';
import './App.scss';

const fetchUserSelected = (userId, setuserData,setUser) =>{
    setTimeout(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(data=>data.json())
        .then(data=>{
            if(data.name){
                setuserData({address:data.address,company:data.company})
                setUser(data.name)
            }else{
                console.log("No existen datos para ese usuario.")
            }
        })
    },500)
    
}

export const App = () => {
    const [user,setUser] = useState('Guess');
    const [id, setUserId] = useState('');
    const [userData, setuserData] = useState('');
    useEffect(()=>{
        if(id)
            fetchUserSelected(id,setuserData,setUser);
    },[id])

    return (
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <h4>Hooks and HOC</h4>
                </div>
                <div className='msgWelcome'>
                    <h5>Hello {user}</h5>
                </div>
            </div>
            <div className='body'>
                <div className='userSelector'>
                    <strong>User List: </strong><UserList userSetter={setUserId} />
                </div>
                {userData?
                <div className='dataContainer'>
                    <div className='userData'>
                        <h5>Address of <i>{user}</i></h5>
                        <div><strong>Street: </strong><span>{userData.address.street}</span></div>
                        <div><strong>Suite: </strong><span>{userData.address.suite}</span></div>
                        <div><strong>City: </strong><span>{userData.address.city}</span></div>
                        <div><strong>Zip-Code: </strong><span>{userData.address.zipcode}</span></div>
                    </div>
                    <div className='userData'>
                        <h5>Company of <i>{user}</i></h5>
                        <div><strong>Name: </strong><span>{userData.company.name}</span></div>
                        <div><strong>CatchPhrase: </strong><span>{userData.company.catchPhrase}</span></div>
                        <div><strong>Business: </strong><span>{userData.company.bs}</span></div>
                    </div>
                </div>
                :''}
            </div>
        </div>
    );
};

export default App;