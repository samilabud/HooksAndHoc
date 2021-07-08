import React from 'react';
import CardWrap from '../../wraphoc/cardwrap.component';
import UserList from '../userslist/userlist.component';

const UserPostCard = ({currentUser,userData,userSetter}) => {
    return (
        
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <h4>Hooks and HOC - Post</h4>
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
                    <div className='userPostData'>
                        <h5>Post of <i>{currentUser}</i></h5>
                        {userData.userPost.map((post,keyid)=>(
                            <div key={post.id}><span>Post {keyid+1}:&nbsp;</span>{post.title}</div>
                        ))}
                    </div>
                </div>
                :''}
            </div>
        </div>
    )
}

export default CardWrap(UserPostCard);