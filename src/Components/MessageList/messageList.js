import ForumIcon from '@mui/icons-material/Forum';
import './messageList.css';
import { useAppContext } from '../../Contexts/appContext';

const MessageList = () => {

    const { currentUserData } = useAppContext();

    return (
        <>
            {currentUserData &&
                <>
                    {currentUserData.name}
                    <br />

                    {currentUserData.messages && currentUserData.messages.length ?

                        <div id="messageList">
                            <ul>
                                {currentUserData.messages.map((message, index) => {
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