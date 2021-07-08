import {useEffect, useState, useReducer} from 'react';

export const CardWrap = WrapCardComponent =>{
    
    //Wrap Misselaneos methods
    const fetchUserSelected = (userId, setuserData, setUser,type) =>{
    
        const fetchData = async()=>{
            const getData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const dataJson = await getData.json();
            if(dataJson.name){
                if(type==="address")
                    setuserData({address:dataJson.address,company:dataJson.company})
                setUser(userChange(dataJson.name))
            }else{
                console.log("The user selected doesn't have additional data on API.")
            }
        }
        fetchData();
    }
    const fetchPostUserSelected = (userId,setuserData,setUser) =>{
    
        const fetchData = async()=>{
            const getData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const dataJson = await getData.json();
            if(dataJson){
                setuserData({userPost:dataJson})
            }else{
                console.log("The user selected doesn't have post data on API.")
            }
        }
        fetchData();
        fetchUserSelected(userId,setuserData,setUser);
    }


    const INITIAL_STATE = {
        currentUser:'Guess'
    };
    //Reducer
    const userChange = user =>({
        type: 'USER_CHANGE',
        payload: user
    })
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
   

    const CardInnerWrap = ({type}) => {
       
        const [state,dispatch] = useReducer(cardReducer,INITIAL_STATE);
        const { currentUser } = state;
    
        const [id, setUserId] = useState('');
        const [userData, setuserData] = useState('');
        
        useEffect(()=>{
            if(id){
                if(type==="address"){
                    fetchUserSelected(id,setuserData,dispatch,type);
                }else if(type==="post"){
                    fetchPostUserSelected(id,setuserData,dispatch);
                }
            }
        },[id,type])

        return <WrapCardComponent userData={userData} currentUser={currentUser} userSetter={setUserId} />

    }
    return CardInnerWrap;
}

export default CardWrap;