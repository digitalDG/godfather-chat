import ForumIcon from '@mui/icons-material/Forum';
import './messageList.css';

const MessageList = ({ user }) => {
    console.log(user);
    return (
        <>
            {user &&
                <>
                    {user.name}
                    <br />

                    {user.messages && user.messages.length ?

                        <div id="messageList">
                            <ul>
                                {user.messages.map((message, index) => {
                                    return (
                                        <li key={index}>{message}</li>
                                    );
                                }
                                )
                                }

                            </ul>
                        </div>

                        :
                        <div id="messageContainer" className="emptyMessageContainer">
                            <ForumIcon fontSize='large' />
                        </div>

                    }
                </>
            }

        </>
    )
};

export default MessageList;