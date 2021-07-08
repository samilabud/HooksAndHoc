import React from 'react';
import CardWrap from '../../wraphoc/cardwrap.component';
import UserList from '../userslist/userlist.component';

const UserAddressCard = ({currentUser,userData,userSetter}) => {
    return (
        
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <h4>Hooks and HOC - Address</h4>
                </div>
                <div className='msgWelcome'>
                    <h5>Hello {currentUser}</h5>
                </div>
            </div>
            <div className='body'>
                <div className='userSelector'>
                    <strong>User List: </strong><UserList userSetter={userSetter} />
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
    )
}

export default CardWrap(UserAddressCard);