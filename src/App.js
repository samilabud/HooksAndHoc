import  {useState, useEffect, useReducer} from 'react';
import UserList from './components/userslist/userlist.component';
import './App.scss';

const fetchUserSelected = (userId, setuserData,setUser) =>{
    
        const fetchData = async()=>{
            const getData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const dataJson = await getData.json();
            if(dataJson.name){
                setuserData({address:dataJson.address,company:dataJson.company})
                setUser(userChange(dataJson.name))
            }else{
                console.log("No existen datos para ese usuario.")
            }
        }
        fetchData();
}
//
const INITIAL_STATE = {
    currentUser:'Guess'
};
//Reducer
const cardReducer = (state, action) => {
    switch(action.type){
        case 'USER_CHANGE':
            return{
                ...state,
                currentUser:action.payload
            };
        default:
            return state;
    }
}
const userChange = user =>({
    type: 'USER_CHANGE',
    payload: user
})

export const App = () => {
    const [state,dispatch] = useReducer(cardReducer,INITIAL_STATE);
    const { currentUser } = state;

    const [id, setUserId] = useState('');
    const [userData, setuserData] = useState('');
    
    useEffect(()=>{
        if(id)
            fetchUserSelected(id,setuserData,dispatch);
    },[id,setUserId])


    return (
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <h4>Hooks and HOC</h4>
                </div>
                <div className='msgWelcome'>
                    <h5>Hello {currentUser}</h5>
                </div>
            </div>
            <div className='body'>
                <div className='userSelector'>
                    <strong>User List: </strong><UserList userSetter={setUserId} />
                </div>
                {userData?
                <div className='dataContainer'>
                    <div className='userData'>
                        <h5>Address of <i>{currentUser}</i></h5>
                        <div><strong>Street: </strong><span>{userData.address.street}</span></div>
                        <div><strong>Suite: </strong><span>{userData.address.suite}</span></div>
                        <div><strong>City: </strong><span>{userData.address.city}</span></div>
                        <div><strong>Zip-Code: </strong><span>{userData.address.zipcode}</span></div>
                    </div>
                    <div className='userData'>
                        <h5>Company of <i>{currentUser}</i></h5>
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