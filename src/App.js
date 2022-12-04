import './App.css';
import { useState, useEffect } from 'react';
import UserList from './Components/UserList/userList';
import MessageList from './Components/MessageList/messageList';
import SendMessageInput from './Components/SendMessageInput/sendMessageInput';
import { useAppContext } from './Contexts/appContext';

const fetchUsers = async () => {
  return [
    { id: 1, name: 'Don', messages: [] },
    { id: 2, name: 'Michael', messages: [] },
    { id: 3, name: 'Sonny', messages: [] },
    { id: 4, name: 'Vito', messages: [] },
  ]
};


const App = () => {
  const [users, setUsers] = useState([]);
  const { currentUserData } = useAppContext();

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetchUsers();

      // set state with the result
      setUsers(data);
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])


  return (
    <div style={{ margin: '20px' }}>

        <UserList users={users} />
        <br />
        {currentUserData !== null ?
          <>
            <MessageList />

            <SendMessageInput />
          </>
          : null
        }
    </div>
  );
}

export default App;
