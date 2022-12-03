
const UserList = ({users, setCurrentUser}) => {
    return (
        <>
         <h1>Users</h1>
         <ul>
         { users.map((user) => {
             return (
             <li key={user.id} onClick={()=>setCurrentUser(user)}>{user.name}</li>
             );
         })}
         </ul>
         </>
    );

};


export default UserList;