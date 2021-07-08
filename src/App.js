
import UserAddressCard from './components/useraddresscard/useraddresscard.component';
import UserPostCard from './components/userpostcard/userpostcard.component';
import './App.scss';


//


export const App = () => {
    return ( 
    <div>
        <UserAddressCard type="address" />
        <UserPostCard type="post" />
    </div>
    );
};

export default App;