import { useAppContext } from '../../Contexts/appContext';
import './userList.css';

const UserList = ({users}) => {

    const { setCurrentUserData } = useAppContext();

    return (
        <>
         <h1>Users</h1>
         <ul>
         { users.map((user) => {
             return (
             <li key={user.id} onClick={()=>setCurrentUserData(user)}>{user.name}</li>
             );
         })}
         </ul>
         </>
    );

};


export default UserList;